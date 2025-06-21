const URL = require('../models/url');

async function handleGenerateNewShortUrl(req, res) {
    const body = req.body;
    if (!body.redirectURL) {
        return res.status(400).json({ error: 'redirectURL is required' });
    }
    console.log('Generating new short URL for:', body.redirectURL);
    const { nanoid } = await import('nanoid');
    const shortId = nanoid(8); // Generate a random 8-character ID
    await URL.create({
        shortId: shortId,
        redirectURL: body.redirectURL,
        visitHistory: []
    });

    return res.json({ id: shortId, redirectURL: body.redirectURL });
}
async function handleGetAnalytics(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOne({ shortId });

    if (!entry) {
        return res.status(404).json({ error: 'Short URL not found' });
    }

    return res.json({
        totalClicks: entry.visitHistory.length,
        analytics: entry.visitHistory
    });
}
async function handleRedirect(req, res) {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
        { shortId },
        {
            $push: {
                visitHistory: {
                    timestamp: new Date(),
                    ip: req.ip
                }
            }
        },
        { new: true }
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.redirectURL);
}

module.exports = {
    handleGenerateNewShortUrl,
    handleGetAnalytics,
    handleRedirect
};
