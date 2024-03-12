let displayValue = '';
let Valueee = '';
function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    let result = eval(displayValue);
    document.getElementById('display').value = result;
    displayValue = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
function calculatprocenta() {
  const  calculatprocent = document.getElementById('display').value
  const  currentprocent = parseFloat(calculatprocent) /100
  document.getElementById('display').value = currentprocent
}

function mocniny() {
  let currentmocniny = document.getElementById('display').value
  document.getElementById('display').value = Math.pow(currentmocniny, 2)
}

function odmocniny() {
  let currentmocniny = document.getElementById('display').value
  document.getElementById('display').value = Math.sqrt(currentmocniny)
}

const validCredentials = [
  "petr.ahoj",
  "jana.pizza2",
  "karel.kočka3",
  "eva.12345",
  "adam.švarc"
];

function checkLogin() {
  const enteredUsername = document.getElementById('Uname').value;
  const enteredPassword = document.getElementById('Pswrt').value;

  const foundUser = enteredUsername + "." + enteredPassword;

for (let i = 0; i < validCredentials.length; i++) {
      if (foundUser === validCredentials[i]) {
          console.log("Login successful.");
          window.location.href = "index.html";
          return;
      }
    }
  true
      alert ("Error: Invalid username or password. Please try again.");
    
  
}