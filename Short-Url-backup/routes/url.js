const express = require('express');
const { handleGenerateNewShortUrl, handleGetAnalytics, handleRedirect } = require('../controllers/url');
const router = express.Router();
router.post('/', handleGenerateNewShortUrl);
router.get('/:shortId', handleRedirect);
router.get("/analytics/:shortId", handleGetAnalytics)
module.exports = router;