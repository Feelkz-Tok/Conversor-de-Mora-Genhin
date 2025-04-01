document.getElementById('conversor').addEventListener('click', function() {
    Mora = prompt ("Quantos Mora você tem?")
  umMora = 0.06
  valorReal = Mora * umMora
  alert ("Seus Moras valem " + valorReal.toFixed(2) + " Reais");
  } );
  