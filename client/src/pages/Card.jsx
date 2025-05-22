import React from 'react';
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow prev" onClick={onClick}>
            <span><i className="fa-solid fa-less-than fa-lg"></i></span>
        </div>
    );
};

const NextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className="custom-arrow next" onClick={onClick}>
          <span><i className="fa-solid fa-greater-than fa-lg"></i></span>
        </div>
    );
};

const Card = ({ images, villaId, villaName, price }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    const handleBooking = async () => {
        try {
            const token = localStorage.getItem("token");
            if (!token) return alert("Please login first.");
    
            
            const checkIn = selectedCheckInDate; 
            const checkOut = selectedCheckOutDate; 
    
            await axios.post("http://localhost:8000/api/booking", {
                villaName,
                villaId,
                checkIn,
                checkOut,
            }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
    
            alert("Booking successful!");
        } catch (error) {
            console.error("Booking failed:", error);
            alert("Booking failed. Try again.");
        }
    };

    return (
        <div className="card">
            <Slider {...settings}>
                {images.map((imageUrl, index) => (
                    <div key={index}>
                        <img src={imageUrl} alt={`Image ${index + 1}`} />
                    </div>
                ))}
            </Slider>

            <button className="bookNowBtn" onClick={handleBooking}>
                Book This Villa
            </button>
        </div>
    );
};

export default Card;
