function kopeeriKontoNumber() {
    var kontoNumber = document.getElementById("kontoNumber");
    kontoNumber.select();
    document.execCommand("copy");
    alert("Konto number kopeeritud: " + kontoNumber.value);
}

function kopeeriSaajaNimi() {
    var saajaNimi = document.getElementById("saajaNimi");
    saajaNimi.select();
    document.execCommand("copy");
    alert("Saaja nimi kopeeritud: " + saajaNimi.value);
}
