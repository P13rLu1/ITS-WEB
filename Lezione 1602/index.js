let btn = document.getElementById("calcbtn");

btn.onclick = () => {
  let a = parseFloat(document.getElementById("op1").value);
  let b = parseFloat(document.getElementById("op2").value);

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
