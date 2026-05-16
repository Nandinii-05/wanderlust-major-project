const express = require("express");
const axios = require("axios");
const Listing = require("../models/listing");
const router = express.Router();

const REC_SERVICE_URL = process.env.REC_SERVICE_URL;

router.get("/", async (req, res) => {
    try {
        const { listing_id, location, country, max_price } = req.query;

        const { data } = await axios.get(`${REC_SERVICE_URL}/recommendations`, {
            params: { listing_id, location, country, max_price, limit: 20 },
            timeout: 60000,
        });

        const { listing_ids } = data;

        // hydrate IDs → full listing documents
        const listings = await Listing.find({ _id: { $in: listing_ids } })
            .select("title image price location country")
            .lean();

        // preserve the ranked order returned by Python
        const map = Object.fromEntries(listings.map((l) => [l._id.toString(), l]));
        const ordered = listing_ids.map((id) => map[id]).filter(Boolean);

        res.json({ recommendations: ordered });
    } catch (err) {
        console.error("Recommendation service error:", err.message);

        // graceful fallback — newest listings if Python service is down
        const fallback = await Listing.find()
            .sort({ _id: -1 })
            .limit(20)
            .select("title image price location country")
            .lean();

        res.json({ recommendations: fallback, fallback: true });
    }
});

module.exports = router;