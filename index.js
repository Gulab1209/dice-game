// var yourName=prompt("Enter Your Name");
// var opponentName=prompt("Enter Your Opponent Name");

//first random image
var randomNumber1=Math.floor(Math.random()*6)+1; //random number range from 1 to 6.
var randomDiceImage="dice" + randomNumber1 + ".png"; // random iamge from dice1 to dice6.
var randomImageSource="images/" + randomDiceImage ; // images/dice1 to dice 6
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//second random image
var randomNumber2=Math.floor(Math.random()*6)+1; //random number range from 1 to 6.
var randomDiceImage2="dice" + randomNumber2 + ".png"; // random iamge from dice1 to dice6.
var randomImageSource2="images/" + randomDiceImage2 ; // images/dice1 to dice 6
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImageSource2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🤗PLAYER 1 WINS🤗";
}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="🤗PLAYER 2 WINS🤗";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}