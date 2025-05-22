import { useDispatch, useSelector } from "react-redux";
import {
    removeCart, getCartTotal, increaseItemQuantity,
    decreaseItemQuantity,
} from "../redux/cartSlice";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import BookingCalendar from "./BookingCalendar"; 
import { useNavigate } from "react-router-dom";
import { setBookingDetails } from "../redux/cartSlice"; 

const Cart = () => {
    const cartitems = useSelector(state => state.cart.cart);
    const totalQuantity = useSelector(state => state.cart.totalQuantity);
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // States for check-in and check-out dates
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);

    // Handle date selection (check-in or check-out)
    const handleDateSelect = (date, type) => {
        if (type === "checkIn") {
            setCheckInDate(date);
        } else if (type === "checkOut") {
            setCheckOutDate(date);
        }
    };

    const handleProceed = () => {
        if (!checkInDate || !checkOutDate) {
            alert("Please select both check-in and check-out dates.");
            return;
        }

        const bookingInfo = {
            roomType: cartitems[0]?.name || "Unknown Room", 
            checkIn: checkInDate ? checkInDate.toDateString() : "N/A",  
            checkOut: checkOutDate ? checkOutDate.toDateString() : "N/A", 
            totalAmount: totalPrice,
            totalGuests: "2 Adults, 1 Child",  
        };

        dispatch(setBookingDetails(bookingInfo));
        navigate("/success");
    };

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cartitems]);

    return (
        <>
            <div className="cartPage">
                <div className="cart">
                    {/* Render cart items */}
                    {cartitems.map(item => (
                        <div className="item" key={item.id}>
                            <div className="item1"><img src={item.img} alt="" /></div>
                            <div className="item2">{item.name}</div>
                            <div className="item3">Rs {item.price}</div>
                            <div className="item4">
                                <div onClick={() => dispatch(decreaseItemQuantity(item.id))} className="minus">-</div>
                                <div className="quantity">{item.piece}</div>
                                <div className="plus" onClick={() => dispatch(increaseItemQuantity(item.id))}>+</div>
                            </div>
                            <div className="item5">
                                <i onClick={() => dispatch(removeCart({ id: item.id }))} className="fa-regular fa-circle-xmark fa-xl"></i>
                            </div>
                            <div className="item6">Rs {item.price * item.piece}</div>
                        </div>
                    ))}
                </div>

                {}
                <div>
                    <BookingCalendar 
                        onDateSelect={(date) => handleDateSelect(date, "checkIn")}
                        selectedDate={checkInDate}
                        placeholder="Select Check-in Date"
                    />
                    <BookingCalendar 
                        onDateSelect={(date) => handleDateSelect(date, "checkOut")}
                        selectedDate={checkOutDate}
                        placeholder="Select Check-out Date"
                    />
                </div>

                <div>
                    {checkInDate && checkOutDate ? (
                        <p>
                            Your selected dates: 
                            <br />
                            Check-in: {checkInDate.toDateString()} 
                            <br />
                            Check-out: {checkOutDate.toDateString()}
                        </p>
                    ) : (
                        <p>Please select both check-in and check-out dates</p>
                    )}
                </div>

                <div className="checkOut">
                    <div onClick={handleProceed}>
                        <NavLink className="navlink" to="/success">Proceed</NavLink>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cart;
