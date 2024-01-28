// routes/secureRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware);

router.get('/secure-route', (req, res) => {
    res.json({ message: 'This is a secure route' });
});

module.exports = router;
