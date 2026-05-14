const express = require("express");
const router = express.Router();
const bookings = require("../controllers/bookings");
const track = require("../utils/trackInteraction");

const wrapAsync = require("../utils/wrapAsync");
const {isLoggedIn} = require("../middleware");

//create booking
router.post("/create/:id", track("booking", 3), isLoggedIn, wrapAsync(bookings.createBooking));

//payment page
router.get("/payment/:id", isLoggedIn, wrapAsync(bookings.renderPaymentPage));

//confirm 
router.post("/confirm/:id", isLoggedIn, wrapAsync(bookings.confirmBooking));

//cancel
router.post("/cancel/:id", isLoggedIn, wrapAsync(bookings.cancelBooking));

//my bookings
router.get("/my", isLoggedIn, wrapAsync(bookings.myBookings));

module.exports = router;