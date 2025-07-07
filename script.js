document.getElementById("botao").addEventListener("click", function() {
  const raio = parseFloat(document.getElementById("raio").value);
  if(raio <= 0){
      document.getElementById("resultado").innerText = "Digite um valor válido";

  }
  else{
      const area = Math.PI * raio * raio ; 
      document.getElementById("resultado").innerText = "O valor da área do círculo é " + area;
  }
});

document.getElementById("botao2").addEventListener("click", function() {
  const letra = document.getElementById("letra").value;
  if(letra == 'M'|| letra =='m'){
      document.getElementById("sexo").innerText = "Sexo Masculino";
  }else if (letra == 'F'|| letra =='f') {
    document.getElementById("sexo").innerText = "Sexo feminino";
} else {
      document.getElementById("sexo").innerText =  "Sexo inválido!";
    
  }
});

document.getElementById("botao3").addEventListener("click", function() {
  const m = parseFloat(document.getElementById("mulheres").value);
  const h = parseFloat(document.getElementById("homens").value);
  const tabela = document.getElementById("tabela");

  const total = m + h;

  if (isNaN(m) || isNaN(h) || m < 0 || h < 0 || total === 0) {
  alert("Por favor, insira valores válidos e não negativos.");
  return;
}

  const m_porcent = ((m / total) * 100).toFixed(2) + "%";
  const h_porcent = ((h / total) * 100).toFixed(2) + "%";
  const total_percent = "100%";

  // Linha de quantidade
  tabela.rows[1].cells[1].innerText = m;
  tabela.rows[1].cells[2].innerText = h;
  tabela.rows[1].cells[3].innerText = total;

  // Linha de porcentagem
  tabela.rows[2].cells[1].innerText = m_porcent;
  tabela.rows[2].cells[2].innerText = h_porcent;
  tabela.rows[2].cells[3].innerText = total_percent;
});
