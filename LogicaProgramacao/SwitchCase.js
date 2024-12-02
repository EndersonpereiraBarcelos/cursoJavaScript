function getDiaSemanaTexto(DiaSemana) {
  let DiaSemanaTexto;
  switch (DiaSemana) {
    case 0:
      DiaSemanaTexto = "Domingo";
      return DiaSemanaTexto;
    case 1:
      DiaSemanaTexto = "Segunda";
      return DiaSemanaTexto;
    case 2:
      DiaSemanaTexto = "Terça";
      return DiaSemanaTexto;
    case 3:
      DiaSemanaTexto = "Quarta";
      return DiaSemanaTexto;
    case 4:
      DiaSemanaTexto = "Quinta";
      return DiaSemanaTexto;
    case 5:
      DiaSemanaTexto = "Sexta";
      return DiaSemanaTexto;
    case 6:
      DiaSemanaTexto = "Sabado";
      return DiaSemanaTexto;
    default:
      DiaSemana = "";
      return DiaSemanaTexto;
  }
}

const data = new Date("2024-05-29 00:00:00");
const DiaSemana = data.getDay();
const DiaSemanaTexto = getDiaSemanaTexto(DiaSemana)
console.log(DiaSemana, DiaSemanaTexto)