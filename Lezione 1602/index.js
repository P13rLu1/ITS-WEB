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
    if ((a == 0) & (b == 0)) {
      ris.innerText = "Porterai MineCreft?";
    } else if (b != 0) {
      ris.innerText = (a / b).toFixed(3);
    } else {
      ris.innerText = "Marco B";
    }
  } else {
    alert("Selezionare Un Operatore");
  }
};
