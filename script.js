function kopeeriKontoNumber() {
    var copyText = document.getElementById("kontoNumber");
    copyText.select();
    document.execCommand("copy");
    alert("Konto number kopeeritud: " + copyText.value);
}

function kopeeriSaajaNimi() {
    var copyText = document.getElementById("saajaNimi");
    copyText.select();
    document.execCommand("copy");
    alert("Saaja nimi kopeeritud: " + copyText.value);
}
