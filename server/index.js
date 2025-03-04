const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); 
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://thesubjectsage.com',
  methods: ['POST', 'OPTIONS'], 
  allowedHeaders: ['Content-Type'], 
}));

const subscriberSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  createdAt: { type: Date, default: Date.now },
});
const Subscriber = mongoose.model('Subscriber', subscriberSchema);

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.post('/subscribers', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(400).json({ error: 'Email already subscribed' });
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();

    res.json({ message: 'Subscribed successfully!' });
  } catch (err) {
    if (err.code === 11000) { 
      return res.status(400).json({ error: 'Email already subscribed' });
    }
    console.error('Subscription error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/', (req, res) => {
  res.send('Proxy server for Subject Sage subscribers');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Proxy server running on port ${PORT}`));