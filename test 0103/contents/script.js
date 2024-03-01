let conta = 0;
const contaElement = document.getElementById("conta");

function increment() {
  if (conta < 9999) {
    conta++;
    updateconta();
  }
}

function decrement() {
  if (conta > 0) {
    conta--;
    updateconta();
  }
}

function reset() {
  conta = 0;
  updateconta();
}

function updateconta() {
  contaElement.innerText = conta;
}
