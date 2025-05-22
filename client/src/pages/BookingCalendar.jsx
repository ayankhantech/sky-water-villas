import { useState } from "react";
import Calendar from "react-calendar";  
import "react-calendar/dist/Calendar.css";

const BookingCalendar = ({ onDateSelect, selectedDate, placeholder }) => {
    const handleDateChange = (date) => {
        onDateSelect(date);  
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder={placeholder} 
                readOnly 
                value={selectedDate ? selectedDate.toDateString() : ""}
            />
            <Calendar
                onChange={handleDateChange}
                value={selectedDate}
            />
        </div>
    );
};

export default BookingCalendar;
