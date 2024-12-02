const h1 = document.querySelector(".container h1");
const data = new Date();

function getDiaSemanaTexto(DiaSemana) {
  let DiaSemanaTexto;
  switch (DiaSemana) {
    case 0:
      DiaSemanaTexto = "Domingo";
      return DiaSemanaTexto;
    case 1:
      DiaSemanaTexto = "Segunda-feira";
      return DiaSemanaTexto;
    case 2:
      DiaSemanaTexto = "Terça-feira";
      return DiaSemanaTexto;
    case 3:
      DiaSemanaTexto = "Quarta-feira";
      return DiaSemanaTexto;
    case 4:
      DiaSemanaTexto = "Quinta-feira";
      return DiaSemanaTexto;
    case 5:
      DiaSemanaTexto = "Sexta-feira";
      return DiaSemanaTexto;
    case 6:
      DiaSemanaTexto = "Sábado";
      return DiaSemanaTexto;
    default:
      DiaSemana = "";
      return DiaSemanaTexto;
  }
}
function getNumeroMes(numeroMes) {
  let nomeMes;
  switch (numeroMes) {
    case 0:
      nomeMes = "Janeiro";
      return nomeMes;
    case 1:
      nomeMes = "fevereiro";
      return nomeMes;
    case 2:
      nomeMes = "março";
      return nomeMes;
    case 3:
      nomeMes = "abril";
      return nomeMes;
    case 4:
      nomeMes = "maio";
      return nomeMes;
    case 5:
      nomeMes = "junho";
      return nomeMes;
    case 6:
      nomeMes = "julho";
      return nomeMes;
    case 7:
      nomeMes = "agosto";
      return nomeMes;
    case 8:
      nomeMes = "setembro";
      return nomeMes;
    case 9:
      nomeMes = "outubro";
      return nomeMes;
    case 10:
      nomeMes = "novembro";
      return nomeMes;
    case 11:
      nomeMes = "dezembro";
      return nomeMes;
  }
}

function CreatDay(data) {
  const diaSemana = data.getDay();
  const numeroMes = data.getMonth();

  const nomeDia = getDiaSemanaTexto(diaSemana);
  const nomeMes = getNomeMes(numeroMes);

  console.log(nomeDia, nomeMes);

  return (
    `${nomeDia}, ${data.getDate()} de ${numeroMes}` +
    `de ${data.getFullYear()} ${data.getHours()}:${data.getMinutes()}`
)
}


