// Funzione per caricare il file JavaScript
function loadScript(url, callback) {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  script.onreadystatechange = callback;
  script.onload = callback;
  document.head.appendChild(script);
}

// Funzione per mostrare gli attori con età superiore a 30 anni
function showActorsAbove30() {
  if (typeof attori !== "undefined") {
    var attoriAbove30 = attori.filter(function (attore) {
      return attore.age > 30;
    });

    var attoriList = document.getElementById("attori-list");
    var ul = document.createElement("ul");

    if (attoriAbove30.length === 0) {
      attoriList.textContent = "Nessun attore sopra i 30 anni trovato.";
    } else {
      attoriAbove30.forEach(function (attore) {
        var li = document.createElement("li");
        var img = document.createElement("img");
        img.src = attore.photo;
        img.alt = attore.name;
        img.style.width = "100px";
        li.appendChild(img);

        var p = document.createElement("p");
        p.textContent =
          attore.name +
          " - Age: " +
          attore.age +
          ", Birthdate: " +
          attore.Birthdate;

        li.appendChild(p);

        ul.appendChild(li);
      });

      attoriList.innerHTML = "";
      attoriList.appendChild(ul);
    }
  } else {
    console.error('Array "attori" non definito.');
  }
}

// Carica il file JavaScript quando viene caricata la pagina
loadScript("arrayOggetti.js", function () {
  console.log("File JavaScript caricato.");
});

document
  .getElementById("showActorsButton")
  .addEventListener("click", showActorsAbove30);
