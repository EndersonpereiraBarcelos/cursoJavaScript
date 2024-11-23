/**
    && -> AND -> E Todas as expressoes precisam ser TRUE para retornar TRUE
    || -> OR -> OU Todas as expressoes precisam ser false para retornar false

    Falsy
    0
    '' "" ``
    Nan
    Null, undefined
 */

function FalaOI() {
  return "oi";
}

const VaiExecutar = false;
console.log(VaiExecutar && FalaOI());

console.log("Enderson" && 0 && "Pokemon");
console.log("Enderson" && true && "Pokemon");
console.log("Enderson" && true && NaN);
