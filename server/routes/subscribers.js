const express = require('express');
const Subscriber = require('../models/Subscriber');
const router = express.Router();

router.post('/', async (req, res) => {
  const { email } = req.body;
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  try {
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.json({ message: 'Subscribed successfully!' });
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ error: 'Email already subscribed' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

module.exports = router;