/**
 * To take a number input from user and display the week day.
 * 
 * @author: Samarth BM
 */

 const prompt = require('prompt-sync')();

 const number = prompt('Enter a number between 1 to 7 to display the week day: ');
 
 if ( number == 1 ) {
     console.log("Sunday");
 }
 else if ( number == 2 ) {
     console.log("Monday");
 }
 else if ( number == 3 ) {
     console.log("Tuesday");
 }
 else if ( number == 4 ) {
     console.log("Wednesday");
 }
 else if ( number == 5 ) {
     console.log("Thursday");
 }
 else if ( number == 6 ) {
     console.log("Friday");
 }
 else if ( number == 7 ) {
     console.log("Saturday");
 }
 else {
     console.log("Wrong input! There are only 7 days in a week.");
 }