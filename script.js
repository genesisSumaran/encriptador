function encriptarTexto() {
  const desplazamiento = 3;
  const inputText = document.getElementById("inputText").value;
  const outputText = document.getElementById("outputText");

  const encriptar = (texto, desplazamiento) => {
    return texto
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          let base = char.toUpperCase() === char ? 65 : 97;
          return String.fromCharCode(
            ((code - base + desplazamiento) % 26) + base
          );
        }
        return char;
      })
      .join("");
  };

  outputText.value = encriptar(inputText, desplazamiento);
}

function desencriptarTexto() {
  const desplazamiento = 3;
  const inputText = document.getElementById("inputText").value;
  const outputMessage = document.getElementById("outputMessage");

  const desencriptar = (texto, desplazamiento) => {
    return texto
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0);
          let base = char.toUpperCase() === char ? 65 : 97;
          return String.fromCharCode(
            ((code - base - desplazamiento + 26) % 26) + base
          );
        }
        return char;
      })
      .join("");
  };

  outputMessage.value = desencriptar(inputText, desplazamiento);
}

function irADesencriptador() {
  const outputText = document.getElementById("outputText").value;
  localStorage.setItem("textoEncriptado", outputText);
  window.location.href = "desencriptador.html";
}

function irAEncriptador() {
  window.location.href = "index.html";
}

window.onload = function () {
  if (window.location.pathname.includes("desencriptador.html")) {
    const textoEncriptado = localStorage.getItem("textoEncriptado");
    if (textoEncriptado) {
      document.getElementById("inputText").value = textoEncriptado;
    }
  }
};
