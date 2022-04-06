var randomDiceNUmber1 = Math.floor(Math.random()*6)+1
randomDiceImage1 = "dice"+randomDiceNUmber1+".png";
randomImageSource1 ="images/"+randomDiceImage1;
var Image1 = document.querySelectorAll("img")[0];
Image1.setAttribute("src",randomImageSource1)

var randomNumber2 = Math.floor(Math.random()*6)+1
var randNumber2Source = "images/dice"+randomNumber2+".png"
var Image2 = document.querySelectorAll("img")[1];
Image2.setAttribute("src",randNumber2Source)
if(randomDiceNUmber1 > randomNumber2)
{
  document.querySelector("h1").innerHTML = "<h1>player 1 is winnr </h1>"
}
else
{
  document.querySelector("h1").innerHTML = "<h1>player 2 is winnr </h1>"
}
