function encriptar() {
    let texto = document.getElementById("Encriptador").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("imag-text");

    let textoCifrado = texto
                .replace(/e/gi, "enter")
                .replace(/i/gi, "imes")
                .replace(/a/gi, "ai")
                .replace(/o/gi, "ober")
                .replace(/u/gi, "ufat");

    if (texto.length != 0){
        document.getElementById("Encriptador").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = "";
        muneco.scr = "./assets/Muñeco.png";
    } else {
        muneco.src = "./assets/Muñeco.png";
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
        alert("Debes ingresar algun texto");
    }
    

}

function desencriptar() {
    let texto = document.getElementById("Encriptador").value;
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("imag-text");

    let textoCifrado = texto
                .replace(/enter/gi, "e")
                .replace(/imes/gi, "i")
                .replace(/ai/gi, "a")
                .replace(/ober/gi, "o")
                .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("Encriptador").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = "";
        muneco.scr = "./assets/Muñeco.png";
} else {
    muneco.src = "./assets/Muñeco.png";
    tituloMensaje.textContent = "Ningun mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar.";
    alert("Debes ingresar algun texto");
}
}

