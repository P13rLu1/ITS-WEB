function updateTime() {
  let d = new Date().toString(); //prendo la data e la trasformo in una stringa
  data = d.split(" ")[4]; //divido la data (come un array) e prendo solo l'ora e inserisco nella var data
  ora = data.split(":").slice(0, 2).join(":");
  secondi = ":" + data.split(":")[2];

  document.getElementById("hm").innerHTML = ora;
  document.getElementById("second").innerText = secondi;

  giorno =
    d.split(" ")[0] +
    " " +
    d.split(" ")[1] +
    " " +
    d.split(" ")[2] +
    " " +
    d.split(" ")[3];
  document.getElementById("day").innerText = giorno;
}

setInterval(updateTime, 10);

var isStarted = false;
var intv;
var partial = 0;
var meas_;

document.getElementById("start_btn").onclick = () => {
  if (!isStarted) {
    let start = new Date().valueOf();
    document.getElementById("meas").innerText = 0;

    intv = setInterval(() => {
      meas_ = (new Date().valueOf() - start) / 1000 + partial; // aggiungo un parziale
      document.getElementById("meas").innerText = meas_.toFixed(3);
    }, 1);
    isStarted = true;
  } else {
    clearInterval(intv);
    isStarted = false;
    partial = meas_; // il parziale diventa la misura fatta fino a quel momento
  }
};

document.getElementById("reset_btn").onclick = () => {
  clearInterval(intv); // Interrompe l'intervallo del cronometro se è attivo
  isStarted = false; // Imposta lo stato del cronometro su falso
  partial = 0; // Reimposta il valore parziale a zero
  document.getElementById("meas").innerText = "00:00:00"; // Reimposta il display del cronometro
};
