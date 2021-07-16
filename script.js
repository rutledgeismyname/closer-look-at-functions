'use strict';
// Creating a Airplane Booking App 
const bookings = [];

const createBooking = function(
    flightNum, 
    numPassengers = 7,
     price = 199 * numPassengers
     ){

    // ES5 way to set default prams, ES6 Way is above ^^^
    // numPassengers = numPassengers || 1;
    // price = price || 199;

    const booking = {
        flightNum,
        numPassengers,
        price
    };
    console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 6);
createBooking('LH123', 55, undefined)
// Var | Flight Num | Passenger Count | Price of Flight