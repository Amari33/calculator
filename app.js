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




 



function calculator (x, b, c) {
  let output = 0;

  try {

    switch(c) {
      case '+':
        output = a + b
        break;

      case '*':
        output = x * b
        break;

      case '-':
        output = a - b
        break;

     case '/': 
        if (b === 0) {
          throw "Can't divide by 0!"
        } else {
          output = a / b
        }
        break;
    }
  } 
  catch(e) {
    console.log("There's an error: ", e)
  }

  return output;
   
}
x = 5;
divide.onclick = function () {
  
  let num1 = document.getElementById("input").value;
  alert(num1);
  equal.onclick = function () {
  x + inp.value;
  alert(inp.value)
}

}
  ß
console.log(calculator(2,8,'*'));
