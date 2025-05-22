const Booking = require("../models/booking-model");

const createBooking = async (req, res) => {
  try {
    const { villas, checkIn, checkOut } = req.body;

    if (!Array.isArray(villas) || villas.length === 0) {
      return res.status(400).json({ msg: "No villas selected" });
    }

    for (let villa of villas) {
      const existingBooking = await Booking.findOne({
        villaId: villa.villaId,
        $or: [
          { checkIn: { $lt: checkOut }, checkOut: { $gt: checkIn } }
        ]
      });

      if (existingBooking) {
        return res.status(400).json({
          msg: `Villa "${villa.name}" is already booked for the selected dates.`,
        });
      }
    }

    const newBookings = await Promise.all(
      villas.map((villa) => {
        return Booking.create({
          villaName: villa.name,
          villaId: villa.villaId,
          checkIn,
          checkOut,
          userId: req.userId,
          userEmail: req.user.email,
        });
      })
    );

    res.status(201).json({ msg: "All bookings successful", bookings: newBookings });
  } catch (error) {
    console.error("Booking error:", error);
    res.status(500).json({ msg: "Booking failed" });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.userId });
    res.status(200).json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ msg: "Could not fetch bookings" });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
};
