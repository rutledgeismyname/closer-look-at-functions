'use strict';
// Creating a Airplane Booking App 
const bookings = [];

const createBooking = function(flightNum, numPassengers, price){
    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123', 85, '$450');