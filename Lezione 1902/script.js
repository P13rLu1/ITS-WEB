// Funzione per aggiornare l'orologio
function updateTime() {
  let d = new Date();
  let hours = ("0" + d.getHours()).slice(-2);
  let minutes = ("0" + d.getMinutes()).slice(-2);
  let seconds = ("0" + d.getSeconds()).slice(-2);
  let timeString = hours + ":" + minutes;

  document.getElementById("hm").innerHTML = timeString;
  document.getElementById("second").innerText = ":" + seconds;

  let day = d.toDateString();
  document.getElementById("day").innerText = day;
}

// Imposta un intervallo per aggiornare l'orologio ogni secondo
setInterval(updateTime, 1000);

// Variabili per il cronometro
let isStarted = false;
let interval;
let partial = 0;
let measurement;

// Gestione del clic sul pulsante di avvio/arresto del cronometro
document.getElementById("start_btn").onclick = () => {
  if (!isStarted) {
    let start = new Date().valueOf();
    document.getElementById("meas").innerText = "0:00:00";

    interval = setInterval(() => {
      measurement = (new Date().valueOf() - start) / 1000 + partial;
      document.getElementById("meas").innerText = formatTime(measurement);
    }, 10);
    isStarted = true;
  } else {
    clearInterval(interval);
    isStarted = false;
    partial = measurement;
  }
};

// Funzione per formattare il tempo nel formato hh:mm:ss:sss
function formatTime(time) {
  let hours = Math.floor(time / 3600);
  let minutes = Math.floor((time % 3600) / 60);
  let seconds = Math.floor(time % 60);
  let milliseconds = Math.floor((time % 1) * 1000);
  return (
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0") +
    ":" +
    milliseconds.toString().padStart(3, "0")
  );
}

interval = setInterval(() => {
  measurement = (new Date().valueOf() - start) / 1000 + partial;
  document.getElementById("meas").innerText = formatTime(measurement);
}, 1);

// Gestione del clic sul pulsante di reset del cronometro
document.getElementById("reset_btn").onclick = () => {
  clearInterval(interval);
  isStarted = false;
  partial = 0;
  document.getElementById("meas").innerText = "00:00:00";
};
