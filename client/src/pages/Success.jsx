import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const bookingDetails = useSelector(state => state.cart.bookingDetails); 
  const navigate = useNavigate();

  useEffect(() => {
    if (!bookingDetails || !bookingDetails.checkIn) {
      navigate("/cart");
    }
  }, [bookingDetails, navigate]);

  const formatDate = (date) => {
    const parsedDate = new Date(date);
   
    if (isNaN(parsedDate)) {
      return "Invalid Date";
    }
    return parsedDate.toDateString();
  };

  return (
    <div className="success-page" style={{ padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#0f172a" }}>
        🎉 Booking Successful!
      </h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Thank you for booking with <strong>Sky Water Villas</strong> 🌊
      </p>

      <div style={{
        margin: "0 auto",
        maxWidth: "500px",
        padding: "1.5rem",
        background: "#f1f5f9",
        borderRadius: "1rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        textAlign: "left"
      }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Booking Details:</h2>
        {bookingDetails ? (
          <>
            <p><strong>Room Type:</strong> {bookingDetails.roomType}</p>
            <p><strong>Check-in:</strong> {formatDate(bookingDetails.checkIn)}</p>
            <p><strong>Check-out:</strong> {formatDate(bookingDetails.checkOut)}</p>
            <p><strong>Total Guests:</strong> {bookingDetails.totalGuests}</p>
            <p><strong>Total Amount:</strong> ₹{bookingDetails.totalAmount}</p>
          </>
        ) : (
          <p>Booking details are unavailable.</p>
        )}
      </div>

      <button
        style={{
          marginTop: "2rem",
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "#0ea5e9",
          color: "white",
          border: "none",
          cursor: "pointer"
        }}
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Success;
