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
    //console.log(booking);
    bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 6);
createBooking('LH123', 55, undefined)
// Var | Flight Num | Passenger Count | Price of Flight

const flight = 'LH234';
const chris = {
    name: 'Chris Rutledge',
    passport: 27833930268939
};
const checkIn = function(flightNum, passenger){
    flightNum = "LH999";
    passenger.name = 'Mr. ' + passenger.name;
    
    if (passenger.passport === 27833930268939){
        alert("Checked in");
    } else{
       alert("Wrong passport");
    }
}

 checkIn(flight, chris);
 console.log(flight);
 console.log(chris);

const newPassport = function(person){
    person.passport = Math.trunc(Math.random() * 100000000000);
}

newPassport(chris);
checkIn(flight, chris);