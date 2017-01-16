//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert
//the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

var guests = prompt("Please enter your number of guests");
var donuts = prompt("Please enter your number of donuts");

var num_g = parseInt(guests, 10)
var num_d = parseInt(donuts, 10)

if (num_g > num_d) {
  alert(`You have ${num_g} guests and ${num_d} donuts - YOU DONT HAVE ENOUGH`)
}
//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
