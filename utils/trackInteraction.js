const Interaction = require("../models/Interaction");
const Listing = require("../models/listing");

const trackInteraction = (type, weight = 1) => async (req, res, next) => {
    next(); // never block the main request

    if (!req.user) return; // only track logged-in users

    try {
        const listing = await Listing.findById(req.params.id).select("location").lean();
        if (!listing) return;

        await Interaction.create({
            listingId: req.params.id,
            userId: req.user._id,
            type,
            weight,
            location: listing.location,
        });
    } catch (err) {
        console.error("Interaction tracking failed:", err.message);
    }
};

module.exports = trackInteraction;