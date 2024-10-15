
const express = require('express');
const { Logout, createCookieToken } = require('../../controllers/authentication');
const router = express.Router();

router.post('/api/jwt', createCookieToken)
router.post('/api/logout', Logout)

module.exports = router;