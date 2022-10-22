function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  handleButtonClick();
}

function calculateImc(weight, height) {
  groups = [{min:16, max:16.99, message:'Muito abaixo do peso', selector:'#group-1'},
            {min:17, max:18.49, message:'Abaixo do peso', selector:'#group-2'},
            {min:18.5, max:24.99, message:'Peso normal', selector:'#group-3'},
            {min:25, max:29.99, message:'Acima do peso',  selector:'#group-4'},
            {min:30, max:34.99, message:'Obesidade I', selector:'#group-5'},
            {min:35, max:39.99, message:'Obesidade grau II', selector:'#group-6'},
            {min:40, max:999.99, message:'Obesidade grau III', selector:'#group-7'}];
  const imc = weight / (height * height);
  const index = groups.findIndex(item => imc>=item.min && imc<=item.max);
  return (index>=0) ? imc.toFixed(1) + ' - ' + groups[index].message : 'fora do intervalo previsto.';
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  imcResult.innerHTML = calculateImc(weight, height);
}

start();

