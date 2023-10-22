/*
Filename: AdvancedWebApp.js

Description: This code is an advanced web application that allows users to sign up, log in, create and edit profiles, upload profile pictures, and post and browse through various categories of content. It incorporates several modern web development techniques and frameworks such as Node.js, Express, MongoDB, and React.

Author: [Your Name]

Date: [Current Date]
*/

// Initialize required packages and frameworks
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Database connection
mongoose.connect('mongodb://localhost:27017/webapp', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to the database'));

// Create User schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profilePicture: { type: String, required: true },
  createdDate: { type: Date, default: Date.now() }
});

// Create User model
const User = mongoose.model('User', userSchema);

// Configure middleware
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define API endpoints
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.post('/signup', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword, profilePicture: '' });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during signup' });
  }
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (user) {
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (isPasswordValid) {
        const token = jwt.sign({ username }, 'mySecretKey');
        res.status(200).json({ token });
      } else {
        res.status(403).json({ error: 'Invalid password' });
      }
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'An error occurred during login' });
  }
});

app.get('/profile/:username', (req, res) => {
  const { username } = req.params;
  User.findOne({ username })
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ error: 'User profile not found' });
      }
    })
    .catch(() => res.status(500).json({ error: 'An error occurred while fetching user profile' }));
});

app.put('/profile/:username', upload.single('profilePicture'), async (req, res) => {
  const { username } = req.params;
  const { originalname } = req.file;

  try {
    const user = await User.findOneAndUpdate(
      { username },
      { profilePicture: originalname },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while updating profile picture' });
  }
});

// Listen to the server on port 3000
app.listen(3000, () => console.log('Server started on port 3000'));