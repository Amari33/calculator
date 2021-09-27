 //ID's

 let inp = document.getElementById('input');
 let times = document.getElementById('times');
 let sub = document.getElementById('sub');
 let add = document.getElementById('add');
 let equal = document.getElementById('equal');
 let divide = document.getElementById('divide');


 //Opertaor Values

function add1() {
  console.log("+")
}

function subtract() {
  console.log("-")
}

function multiply() {
  console.log("*")
}

function divide1() {
  console.log("÷")
}



// Button Values

function one () {
  inp.value += "1" ;
}

function two () {
  inp.value += "2";
}

function three () {
  inp.value += "3";
}

function four () {
  inp.value +=  "4";
}

function five () {
  inp.value += "5";
}

function six () {
  inp.value += "6";
}

function seven () {
  inp.value += "7";
}

function eight () {
  inp.value += "8";
}

function nine () {
  inp.value += "9";
}

function zero () {
  inp.value += "0";
}

function reset () {
  inp.value = "0";
}

//logic




divide.onclick = function () {
  
  var num1 = document.getElementById("input").value;
  alert(num1);

}

console.log(num1)

equal.onclick = function () {

   num1 + inp.value;
   alert(inp.value)
}