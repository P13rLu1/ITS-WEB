function validaDati() {
  let annoCorrente = new Date().getFullYear();
  let annoIscrizione = document.getElementById("annoIscrizione").value;

  if (annoIscrizione > annoCorrente) {
    document.getElementById("error-box").innerHTML =
      "L'anno di iscrizione non puo' essere maggiore dell'anno corrente!";
    return false;
  }

  let email = document.getElementById("email1");

  if (email.value == "") {
    document.getElementById("error-box").innerHTML = "Email non inserita";
    return false;
  }

  let posizioneChiocciola = String(email.value).indexOf("@");
  if (String(email.value).indexOf(".", posizioneChiocciola) == -1) {
    document.getElementById("error-box").innerHTML =
      "Email inserita non valida, inserire il dominio '.ddd' dopo la @";
    return false;
  }

  let fiscale = document.getElementById("fiscal").value.substring(6, 8);
  // let res = annoCorrente.toString();
  let rev = annoCorrente - fiscale;
  let rei = rev.toString().substr(2, 4);
  if (rei > 25) {
    document.getElementById("error-box").innerHTML =
      "Puoi Avere Massimo 25 Anni!";
    return false;
  }

  return true;
}

function resetta() {
  let text = document.getElementsByName("reset");
  for (let i = 0; i < text.length; i++) text[i].value = "";
  document.getElementById("indirizzo").selectedIndex = 0;
  document.getElementById("oreInformatica").selectedIndex = 0;
  let trattamento = document.getElementsByName("trattamento");
  for (let i = 0; i < trattamento.length; i++) trattamento[i].checked = false;
}
