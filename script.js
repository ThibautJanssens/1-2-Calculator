
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
document.querySelector("#ButtonPlus").addEventListener('click', ()=>{ add();});
document.querySelector("#ButtonMinus").addEventListener('click', ()=>{ substract();});
document.querySelector("#ButtonMultiply").addEventListener('click', ()=>{ multiply();});
document.querySelector("#ButtonDivide").addEventListener('click', ()=>{ divide();});

function add(){
  let addend1 = parseInt(getFirstTerm());
  let addend2 = parseInt(getSecondTerm());

  document.getElementById("Result").innerHTML = (addend1 + addend2);
}

function substract(){
  let minuend = parseInt(getFirstTerm());
  let subtrahend = parseInt(getSecondTerm());

  document.getElementById("Result").innerHTML = (minuend - subtrahend);
}

function multiply(){
  let multiplier = parseInt(getFirstTerm());
  let multiplicand = parseInt(getSecondTerm());

  document.getElementById("Result").innerHTML = (multiplier * multiplicand);
}

function divide(){
  let dividend = parseInt(getFirstTerm());
  let divisor = parseInt(getSecondTerm());

  document.getElementById("Result").innerHTML = (dividend / divisor);
}

function getFirstTerm(){
  return document.getElementById("Number1").value;
}

function getSecondTerm(){
  return document.getElementById("Number2").value;
}