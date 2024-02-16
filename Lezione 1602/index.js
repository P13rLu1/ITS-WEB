let btn = document.getElementById("calcbtn");

btn.onclick = () => {
  let a = parseFloat(document.getElementById("op1").value) || 0;
  let b = parseFloat(document.getElementById("op2").value) || 0;

  let operatore = document.getElementById("operator").value;

  let ris = document.getElementById("risultato");

  if (operatore == "sum") {
    ris.innerText = a + b;
  } else if (operatore == "subtract") {
    ris.innerText = a - b;
  } else if (operatore == "multiply") {
    ris.innerText = a * b;
  } else if (operatore == "divide") {
    ris.innerText = a / b;
  } else {
    alert("Selezionare Un Operatore");
  }
};
