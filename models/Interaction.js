const mongoose = require("mongoose");

const interactionSchema = new mongoose.Schema({
    listingId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Listing",
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
    type: {
        type: String,
        enum: ["view", "booking"],
        required: true,
    },
    weight: {
        type: Number,
        default: 1,
    },
    location: String,   // denormalized from listing for faster trending queries
    createdAt: {
        type: Date,
        default: Date.now,
        index: true,
    },
});

interactionSchema.index({ listingId: 1, createdAt: -1 });

module.exports = mongoose.model("Interaction", interactionSchema);