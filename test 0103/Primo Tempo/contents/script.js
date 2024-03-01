let conta = 0;
const contaElement = document.getElementById("conta");

function increment() {
  if (conta < 9999) {
    conta++;
    updateConta();
  }
}

function decrement() {
  if (conta > 0) {
    conta--;
    updateConta();
  }
}

function reset() {
  conta = 0;
  updateConta();
}

function updateConta() {
  contaElement.innerText = conta;
}
