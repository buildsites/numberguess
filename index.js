var name = prompt ("Hello Gamer, input Your Name to Enter Stage One of this number guessing game");
var n = Math.random();
n = n * 3;
n = Math.floor(n) + 1;
console.log(n);
var guess = prompt (  name +" Welcome"+" to stage one guess the number in my Console to go to stage two")

if (guess == n){
    alert("correct");
    var p = Math.random();
     p = p * 4;
p = Math.floor(p) + 1;
console.log(p);
var guess2 = prompt (  name +" Welcome"+" to stage to Guess the Number in my console to finish game");
 if (guess2 == p){
    alert("Congrats " + name + "You finished the game")
 } else {alert("think you need a reboost, Try again")} 

} else {alert("I thought You were a genius lol, try again")}
