function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);
  handleButtonClick();
}

function calculateImc(weight, height) {
  return (weight / (height * height)).toFixed(2);
}

function ImcGroup(imc) {
  groups = [{min:16, max:16.99, message:'Muito abaixo do peso'},
            {min:17, max:18.49, message:'Abaixo do peso'},
            {min:18.5, max:24.99, message:'Peso normal'},
            {min:25, max:29.99, message:'Acima do peso'},
            {min:30, max:34.99, message:'Obesidade I'},
            {min:35, max:39.99, message:'Obesidade grau II'},
            {min:40, max:999.99, message:'Obesidade grau III'}];
  const index = groups.findIndex(item => imc>=item.min && imc<=item.max);
  return (index>=0) ? groups[index].message : 'Fora do intervalo previsto.';
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');
  var imcResult = document.querySelector('#imc-result');
  var imcGroup = document.querySelector('#imc-group');
  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);
  imc = calculateImc(weight, height);
  imcResult.innerHTML = imc;
  imcGroup.innerHTML = ImcGroup(imc);
}

start();

