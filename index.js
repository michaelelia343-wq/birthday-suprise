let scene1=document.getElementsByClassName("scene1")[0];
let scene2=document.getElementsByClassName("scene2")[0];
let scene3=document.getElementsByClassName("scene3")[0];
let scene4=document.getElementsByClassName("scene4")[0];
let scene5=document.getElementsByClassName("scene5")[0];
let scene6=document.getElementsByClassName("scene6")[0];

let button1=document.getElementById("startButton");
let button2=document.getElementById("continue1");
let button3=document.getElementById("continue2");
let button4=document.getElementById("continue3");
let randomNumber=Math.floor(Math.random()*3)+1;
let num=document.getElementById("num");
let submit=document.getElementById("roll");
let result1=document.getElementById("value");
let result2=document.getElementById("h4");

//scene1 to scene2 
button1.onclick=function(){
scene1.style.display="none";
scene2.style.display="flex";
};
//scene2 to scene3
button2.onclick=function(){
scene2.style.display="none";
scene3.style.display="flex";
};

//scene3 to scene4
button3.onclick=function(){
scene3.style.display="none";
scene4.style.display="flex";
};

//scene4 to scene5
button4.onclick=function(){
scene4.style.display="none";
scene5.style.display="flex";
};

//scene5 to scene6
 submit.onclick=function(){

    let randomNumber=Math.floor(Math.random()*3)+1;

    let guess=Number(num.value);

    if(guess < 1 || guess > 3){

        result2.textContent="Enter a number between 1 and 3 😒🎲";

        return;
    }

    if(guess !== randomNumber){

        result1.textContent=randomNumber;

        result2.textContent="You lost babe 😭 Roll again 🎲❤️";

    }

    else{

        result1.textContent=randomNumber;

        result2.textContent="WOOOOW YOU WON BABE 🎲❤️🎉🎉";

        setTimeout(function(){

            scene5.style.display="none";

            scene6.style.display="flex";

        },1500);

    }

};


