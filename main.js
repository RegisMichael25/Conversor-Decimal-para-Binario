let conv = document.getElementById('btn-conversor');
let input = document.querySelector('input');


let result = document.getElementById('result');
// Tabela binária
// 128|64|32|16|8|4|2|1

input.addEventListener('input', () => {
  if(input.value > 255 || input.value < 0)
  {
    input.style.border = '1px solid red'
  }
  else if (input.value <= 255 || input.value>= 0) 
  {
    input.style.border = '1px solid green'
  }
})

function zerarInput(){
  input.value = ""
}

conv.addEventListener('click', () => {
  let num = input.value;
  let binarios = [];
  let tabela = 128;
  
  num = parseInt(num);
  
  if(num > 255 || num < 0)
  {
    zerarInput();
    input.style.border = '1px solid red'
    console.log('Números inválido!');
    result.innerHTML = "Número maior que o permitido!"
    process.exit();
  }
  
  while (tabela != 1)
  {
    if (num < tabela)
    {
      binarios.push("0")
    }
    else if (num >= tabela)
    {
      binarios.push("1")
      num = num - tabela
    }

    tabela /= 2
  }
  if (num % 2 == 0) {
    binarios.push("0")
  }
  else if (num % 2 == 1) {
    binarios.push("1")
  }
  console.log(binarios)
  input.style.border = '1px solid green'
  result.innerHTML = `128 | 64 | 32 | 16 | 8 | 4 | 2 | 1<br>
  ${binarios[0]} ${binarios[1]}  ${binarios[2]} ${binarios[3]} ${binarios[4]} ${binarios[5]}  ${binarios[6]} ${binarios[7]}`
  zerarInput();
});