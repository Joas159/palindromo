const button = document.querySelector('#botao');
const vlrInicial = document.querySelector('#vlrInicial');
const vlrFinal = document.querySelector('#vlrFinal');
const resultado = document.querySelector('.divResposta');
const arrayResult = [];

button.addEventListener("click", (event) => {
  
  if (vlrInicial.value == "" || vlrFinal.value == "") {
    return;
  }
  
  event.preventDefault();
  resultado.classList.toggle('escondido');
  
  for (let index = vlrInicial.value; index <= vlrFinal.value; index++) {
    ePalindromo(index);
  }
  vlrInicial.value = "";
  vlrFinal.value = "";
  
  showScreen(arrayResult);
});

function ePalindromo(str) {
  str = `${str}`;
  var lowRegStr = str.replace(/W/);
  var reverseStr = lowRegStr.split("").reverse().join("");
  if (reverseStr === lowRegStr) {
    arrayResult.push(str);    
  }
}

function showScreen(array) {
  const test = array.toString();
  const test2 = test.split(",").join(" - ");
  console.log(test2);
  resultado.innerText = test2;
}