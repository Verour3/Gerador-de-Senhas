const senhaCaixa = document.getElementById("senha");

const maiusculo = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const minusculo = "abcdefghijklmnopqrstuvwxyz";
const numeros = "0123456789";
const simbolos = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

const todosCaracteres = maiusculo + minusculo + numeros + simbolos;

const range = document.getElementById("length");
const lengthValue = document.getElementById("length-value");
const strengthText = document.getElementById("senha-forca");

range.addEventListener("input", () => {
  lengthValue.textContent = range.value;
  atualizarForca(range.value);
});

function atualizarForca(tamanho) {
  strengthText.classList.remove("forca-fraca", "forca-ok", "forca-forte");

  if (tamanho <= 9) {
    strengthText.textContent = "Força: Fraca";
    strengthText.classList.add("forca-fraca");
  } else if (tamanho <= 15) {
    strengthText.textContent = "Força: Ok";
    strengthText.classList.add("forca-ok");
  } else {
    strengthText.textContent = "Força: Giga";
    strengthText.classList.add("forca-forte");
  }
}

atualizarForca(range.value);

function gerarSenha() {
  const tamanho = parseInt(range.value);
  let senha = "";

  senha += maiusculo[Math.floor(Math.random() * maiusculo.length)];
  senha += minusculo[Math.floor(Math.random() * minusculo.length)];
  senha += numeros[Math.floor(Math.random() * numeros.length)];
  senha += simbolos[Math.floor(Math.random() * simbolos.length)];

  while (senha.length < tamanho) {
    senha +=
      todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)];
  }

  senhaCaixa.value = senha;
}

function copiarSenha() {
  senhaCaixa.select();
  document.execCommand("copy");
}
