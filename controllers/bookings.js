const Booking = require("../models/booking");
const Listing = require("../models/listing");

module.exports.createBooking = async(req, res) => {
    const {checkIn, checkOut} = req.body;
    const listing = await Listing.findById(req.params.id);

    console.log("checkIn:", checkIn);
    console.log("checkOut:", checkOut);

    const days = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);

    if(days <= 0){
        req.flash("error", "Invalid date selection");
        return res.redirect(`/listings/${req.params.id}`);
    }

    const totalPrice = days * listing.price;

    const existingBooking = await Booking.findOne({
        listing: listing._id,
        status: "confirmed",
        $or: [
            {
                checkIn: {$lte: checkOut},
                checkOut: {$gte: checkIn}
            }
        ]
    });

    if(existingBooking) {
        req.flash("error", "These dates are already booked!");
        return res.redirect(`/listings/${req.params.id}`);
    }

    const booking = new Booking({
        listing: listing._id,
        user: req.user._id,
        checkIn,
        checkOut,
        totalPrice,
    });

    await booking.save();

    res.redirect(`/bookings/payment/${booking._id}`);
};

module.exports.renderPaymentPage = async (req, res) => {
  const booking = await Booking.findById(req.params.id)
    .populate("listing");

  console.log("POPULATED:", booking.listing); // 👈 debug

  res.render("bookings/payment", { booking });
};

module.exports.confirmBooking = async (req, res) => {
    const booking = await Booking.findById(req.params.id);
    booking.status = "confirmed";
    await booking.save();

    req.flash("success", "Booking Confirmed!");
    res.redirect("/listings");
};

module.exports.cancelBooking = async(req,res) => {
    const booking = await Booking.findById(req.params.id);
    booking.status = "cancelled";
    await booking.save();

    req.flash("error", "Payment Cancelled");
    res.redirect("/listings");
};

module.exports.myBookings = async (req, res) => {
    const bookings = await Booking.find({user: req.user._id}).populate("listing");
    res.render("bookings/index", {bookings});
}