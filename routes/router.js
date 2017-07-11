const express = require('express');
const router = express.Router();
const sportsStatsRouter = require('./sportsStats.js');

// router.use('/api/sportsStats', sportsStatsRouter);

router.get('/', (req, res) => {
  res.redirect('/api');
});

module.exports = router;