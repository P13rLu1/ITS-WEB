let btn = document.getElementById("calcbtn");

btn.onclick = () => {
  let a = parseFloat(document.getElementById("op1").value);
  let b = parseFloat(document.getElementById("op2").value);

  let operatore = document.getElementById("operator").value;

  if (operatore == "sum") {
    alert("risultato: ", a + b);
  } else if (operatore == "subtract") {
    alert("risultato: ", a - b);
  } else if (operatore == "multiply") {
    alert("risultato: ", a * b);
  } else if (operatore == "divide") {
    alert("risultato: ", a / b);
  } else {
    alert("Selezionare Un Operatore");
  }
};
