const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 5000;

// Data user (dalam praktik nyata, gunakan database)
const users = [
  {
    id: 1,
    email: 'admin@tokogiatar.com',
    password: 'admin123',
    name: 'Admin Heber'
  },
  {
    id: 2,
    email: 'user@example.com',
    password: 'user123',
    name: 'User Contoh'
  }
];

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Session configuration
app.use(session({
  secret: 'your-secret-key-gitar-heber',
  resave: false,
  saveUninitialized: true,
  cookie: { 
    secure: false,
    maxAge: 24 * 60 * 60 * 1000
  }
}));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware untuk checking login
const isLoggedIn = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/login');
  }
};

// Routes

// Halaman utama (redirect ke dashboard jika sudah login)
app.get('/', (req, res) => {
  if (req.session.user) {
    res.redirect('/dashboard');
  } else {
    res.redirect('/login');
  }
});

// Halaman Login
app.get('/login', (req, res) => {
  res.render('login', { 
    title: 'Login - Toko Gitar Heber',
    message: req.query.message || null 
  });
});

// Handle Login POST
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.render('login', { 
      title: 'Login - Toko Gitar Heber',
      message: 'Email dan password harus diisi!' 
    });
  }

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    req.session.user = {
      id: user.id,
      email: user.email,
      name: user.name
    };
    res.redirect('/dashboard');
  } else {
    res.render('login', { 
      title: 'Login - Toko Gitar Heber',
      message: 'Email atau password salah!' 
    });
  }
});

// Halaman Registrasi
app.get('/register', (req, res) => {
  res.render('register', { 
    title: 'Register - Toko Gitar Heber',
    message: req.query.message || null 
  });
});

// Handle Register POST
app.post('/register', (req, res) => {
  const { name, email, password, confirmPassword, phone } = req.body;

  if (!name || !email || !password || !confirmPassword || !phone) {
    return res.render('register', { 
      title: 'Register - Toko Gitar Heber',
      message: 'Semua field harus diisi!' 
    });
  }

  if (password !== confirmPassword) {
    return res.render('register', { 
      title: 'Register - Toko Gitar Heber',
      message: 'Password tidak cocok!' 
    });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    return res.render('register', { 
      title: 'Register - Toko Gitar Heber',
      message: 'Email sudah terdaftar!' 
    });
  }

  const newUser = {
    id: users.length + 1,
    email,
    password,
    name,
    phone
  };
  users.push(newUser);

  res.redirect('/login?message=Registrasi berhasil! Silakan login.');
});

// Halaman Dashboard (hanya untuk yang sudah login)
app.get('/dashboard', isLoggedIn, (req, res) => {
  res.render('dashboard', { 
    title: 'Dashboard - Toko Gitar Heber',
    user: req.session.user 
  });
});

// Halaman Produk (hanya untuk yang sudah login)
app.get('/products', isLoggedIn, (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Yamaha CS40 3/4-Size Classical Guitar, Natural',
      price: 1261000,
      image: 'gitar.jpg'
    },
    {
      id: 2,
      name: 'Yamaha Gitar Akustik Elektrik FX400',
      price: 2100000,
      image: 'gitar2.jpg'
    },
    {
      id: 3,
      name: 'Yamaha Gitar Elektrik PAC 612VIIX',
      price: 6275000,
      image: 'gitar3.jpg'
    },
    {
      id: 4,
      name: 'Yamaha Bass Elektrik BB234',
      price: 3180000,
      image: 'gitar4.jpg'
    },
    {
      id: 5,
      name: 'Fender Acoustasonic 15 Acoustic Guitar Amplifier, 230V EU',
      price: 2750000,
      image: 'ampli.jpg'
    },
    {
      id: 6,
      name: 'Kabel Jack Gitar Keyboard dan Bass Canare Panjang 6M',
      price: 105000,
      image: 'kabel.jpg'
    }
  ];

  res.render('products', { 
    title: 'Produk - Toko Gitar Heber',
    user: req.session.user,
    products: products
  });
});

// API untuk checkout
app.post('/api/checkout', isLoggedIn, (req, res) => {
  const { cart, total } = req.body;
  
  console.log('Checkout dari:', req.session.user.name);
  console.log('Items:', cart);
  console.log('Total:', total);

  res.json({ 
    success: true, 
    message: 'Checkout berhasil! Terima kasih telah berbelanja di Toko Gitar Heber.' 
  });
});

// Logout
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.redirect('/dashboard');
    }
    res.redirect('/login?message=Anda telah logout.');
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).render('404', { 
    title: 'Halaman Tidak Ditemukan',
    user: req.session.user || null 
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`\n${'='.repeat(50)}`);
  console.log(`Server Toko Gitar Heber berjalan di:`);
  console.log(`http://localhost:${PORT}`);
  console.log(`${'='.repeat(50)}\n`);
  console.log(`User test:`);
  console.log(`Email: admin@tokogiatar.com`);
  console.log(`Password: admin123`);
  console.log(`${'='.repeat(50)}\n`);
});
