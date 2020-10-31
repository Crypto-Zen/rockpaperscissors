const c = document.querySelector('.cover');
const select = document.querySelector('select');
const game = document.querySelector('.game');
var img = document.querySelectorAll('img');
var btn = document.getElementById('throw');
var compRoll;
var compshow = document.querySelector('comp-state');

//all of this are just variables that I will use in the game
//don't worry I won't hurt any of them.
var usr;
var cmptr;
var won ;

var usrPoint;
var compPoint;
var tries;


window.addEventListener('load', start);

function start() {

usrPoint = 0;
compPoint = 0;
tries = 0;
}

btn.addEventListener('click', thrown);
select.addEventListener('click', check);
//img.addEventListeners('click', thrown);


//this is where everything starts when you click throw btn
function thrown() {
   tries += 1;
   document.querySelector('.tries').innerText ='rolls: '+ tries;
    check()
    compute();
    win()
    declare();
}

function check() {
    var ro = "rock";
    var pa = "paper";
    var sc = "scissors";
   var val = select.value;
   var pic = document.getElementById('user');
   var st = document.querySelector('.state');
   var i = 'img/';
   var pn = '.png';


   if (val === ro){
    usr = 1;
      pic.src = i+"br"+pn;
      st.innerText = "rock";
   }

   if (val === pa){
     usr = 2;
     pic.src = i+"bp"+pn;
     st.innerText = "paper";
   }

   if (val === sc){
         usr = 3;
         pic.src = i+"bs"+pn;
         st.innerText = "scissors";

    }
}

//this is for computer to generate a completly random throw
function compute(){
  var pic = document.querySelector('#compImg')
   var st = document.querySelector('.comp-state');
   compRoll = Math.round(Math.random()*5+1);
   var i = 'img/';
   var pn = '.png';

   if (compRoll === 1){
      cmptr = 1;
        pic.src = i+"br"+pn;
        st.innerText = "rock";
   }

   if (compRoll === 2){
    cmptr = 2;
        pic.src = i+"bp"+pn;
        st.innerText = "paper"
   }

   if (compRoll === 3){
       cmptr = 3;
        pic.src = i+"bs"+pn;
        st.innerText = "scissors";
   }
   if (compRoll === 4){
       cmptr = 1;
        pic.src = i+"br"+pn;
        st.innerText = "rock"
   }

   if (compRoll === 5){
       cmptr = 2;
        pic.src = i+"bp"+pn;
        st.innerText = "paper"
   }

   if (compRoll === 6){
         cmptr = 3;
        pic.src = i+"bs"+pn;
        st.innerText = "scissors";
   }
}

//this is where the magic happens
// I arranged them in order rock, paper and scissors and numbered them respectively
//so rock =1 paper 2 and scissors = 3; so if one chooses paper and computer rock it will be 2 to 1;
// if you subtract  2 - 1; you will get one and win will be true on line 130 below and the same applies to others just math



function win() {
var us = usr;
var cm = cmptr;

if (us - cm === 1){
  won = true;
}

if (us - cm === -1){
  won = false;
}
if (us - cm > 1){
  won = false;
}
if (us - cm < -1){
  won = true;
}
if (us === cm){
  won = "draw";
}
}

function declare(msg) {
  msg = document.querySelector('.winningMessage');

   if (won){
      usrPoint += 1;
   }

    if (!won) {
      compPoint += 1;
   }
   if (won === 'draw'){
      usrPoint -= 1;
   }

 document.querySelector('.usert').innerText = "user: "+ usrPoint;
 document.querySelector('.compt').innerText = "comp: "+ compPoint;

 if (usrPoint > 3) {
   msg.innerText = ('you won');
    document.getElementById('user').style.boxShadow = "3px 3px 9px #33CC33";
   alert()
 }
 if (compPoint > 3) {
  msg.innerText = 'you lost';
  document.querySelector('#compImg').style.boxShadow = "3px 3px 9px #33CC33";
   alert()
 }
}


function alert() {
  btn.removeEventListener('click', thrown);
  var btnR = document.createElement('button');
  game.appendChild(btnR);
  btnR.innerText = "restart";
  btnR.addEventListener('click', () => {
    restart();
    btnR.parentNode.removeChild(btnR);
  })
}

//this is when restarting everything
function restart() {
   start();
   document.querySelector('.tries').innerText ='rolls: 0';
   document.querySelector('.usert').innerText = "user: 0";
   document.querySelector('.compt').innerText = "comp: 0";
   document.querySelector('.winningMessage').innerText = '';
 document.getElementById('user').style.boxShadow = "3px 3px 9px #000";
   document.getElementById('compImg').style.boxShadow = "3px 3px 9px #000";
   btn.addEventListener('click', thrown);
}
//rememmmber styling is on you, then you will remove the personalyzed comments