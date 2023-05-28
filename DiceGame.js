
var number1=Math.floor(Math.random()*6)+1;
var image1="images/dice"+number1+".png";
var fimage1=document.querySelectorAll("img")[0];
fimage1.setAttribute("src",image1);

var number2=Math.floor(Math.random()*6)+1;
var image2="images/dice"+number2+".png";
var fimage2=document.querySelectorAll("img")[1];
fimage2.setAttribute("src",image2);

if (number1>number2) {
    document.querySelector("h1").innerHTML=href="🚩Player 1 Wins";
}
else if(number2>number1) {
    document.querySelector("h1").innerHTML="Player 2 Wins🚩";
}
else {
    document.querySelector("h1").innerHTML="!!It's a Draw!!";
}
if (number2> number3){
    document.querySelector("h2").innerHTML="!nothing could be done";
    
}