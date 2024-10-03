function kopeeriKontoNumber() {
    var kontoNumber = document.getElementById("kontoNumber");
    kontoNumber.select();
    kontoNumber.setSelectionRange(0, 99999); /* Mobiili jaoks */
    document.execCommand("copy");
    alert("Konto number kopeeritud: " + kontoNumber.value);
}

function kopeeriSaajaNimi() {
    var saajaNimi = document.getElementById("saajaNimi");
    saajaNimi.select();
    saajaNimi.setSelectionRange(0, 99999); /* Mobiili jaoks */
    document.execCommand("copy");
    alert("Saaja nimi kopeeritud: " + saajaNimi.value);
}
