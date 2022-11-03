// CALCULATOR-GUI By Jonathan

//ADDEVENTLISTENER
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  //INPUT
  let A = +document.getElementById("a-in").value;
  let B = +document.getElementById("b-in").value;
  let C = +document.getElementById("c-in").value;
  let D = +document.getElementById("d-in").value;
  let E = +document.getEllementById("e-in").value;

  //PROCESS
  let average = (A + B + C + D + E) / 5;

  //OUTPUT
  document.getElementById("output").innerHTML = average;
}
