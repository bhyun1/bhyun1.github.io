//add quantity buttons
function addquantityFunction() {
  document.getElementById("QT").innerHTML = "1";
  document.getElementById('qt-value').value = "1";
}

function addquantityFunction2() {
  document.getElementById("QT").innerHTML = "3";
  document.getElementById('qt-value').value = "3";
}

function addquantityFunction3() {
  document.getElementById("QT").innerHTML = "6";
  document.getElementById('qt-value').value = "6";
}

function addquantityFunction4() {
  document.getElementById("QT").innerHTML = "12";
  document.getElementById('qt-value').value = "12";
}
//add glaze buttons
function addglazeFunction() {
  document.getElementById("GL").innerHTML = "None";
  document.getElementById('gl-value').value = "None";
}

function addglazeFunction2() {
  document.getElementById("GL").innerHTML = "Milk-Sugar";
  document.getElementById('gl-value').value = "Milk-Sugar";
}

function addglazeFunction3() {
  document.getElementById("GL").innerHTML = "Vanila-Sugar";
  document.getElementById('gl-value').value = "Vanila-Sugar";
}

function addglazeFunction4() {
  document.getElementById("GL").innerHTML = "Double-Chocolate";
  document.getElementById('gl-value').value = "Double-Chocolate";
}

//removing button
function removeFunction1() {
  document.getElementById("QT").innerHTML = " ";
}
function removeFunction2() {
  document.getElementById("GL").innerHTML = " ";
}

// form.addEventListener('submit', (event) => {
//   // handle the form data
//   event.preventDefault();
//   // let quantityBun = document.getElementById('QT').innerHTML;
//   // let glazingBun = document.getElementById('GL').innerHTML;
//   // let form = document.getElementById('addToCart');
//   // document.getElementById('qt-value').value = quantityBun;
//   // form.submit();
// });
