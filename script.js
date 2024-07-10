// Función para encriptar el mensaje
function encrypt() {
    let message = document.getElementById("message").value;
    let key = 3;  // Usamos un desplazamiento fijo de 3 para simplificar
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-z]/)) {
            let code = message.charCodeAt(i);
            char = String.fromCharCode(((code - 97 + key) % 26) + 97);
        }
        result += char;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("result-text").innerText = 'Mensaje encriptado:';
    document.getElementById("illustration").style.display = 'none';
    document.getElementById("copyButton").style.display = 'block';
}

// Función para desencriptar el mensaje
function decrypt() {
    let message = document.getElementById("message").value;
    let key = 3;  // Usamos un desplazamiento fijo de 3 para simplificar
    let result = '';

    for (let i = 0; i < message.length; i++) {
        let char = message[i];
        if (char.match(/[a-z]/)) {
            let code = message.charCodeAt(i);
            char = String.fromCharCode(((code - 97 - key + 26) % 26) + 97);
        }
        result += char;
    }

    document.getElementById("result").innerText = result;
    document.getElementById("result-text").innerText = 'Mensaje desencriptado:';
    document.getElementById("illustration").style.display = 'none';
    document.getElementById("copyButton").style.display = 'block';
}

// Función para copiar el mensaje encriptado/desencriptado al portapapeles
function copyToClipboard() {
    const resultText = document.getElementById("result").innerText;
    navigator.clipboard.writeText(resultText).then(() => {
        // Copiado al portapapeles sin alerta
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}
