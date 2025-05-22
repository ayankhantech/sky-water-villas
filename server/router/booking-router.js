const express = require("express");
const { createBooking, getUserBookings } = require("../controllers/booking-controller");
const authMiddleware = require("../middleware/authMiddleware"); 

const router = express.Router();


router.post("/", authMiddleware, createBooking); 


router.get("/mybookings", authMiddleware, getUserBookings);  

module.exports = router;
