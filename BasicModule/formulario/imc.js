function imc() {

    const form = document.querySelector(".form")

    // form.onsubmit = function(evento){
    //     evento.preventDefault();
    //     window.alert(1)
    //     console.log("form sent ")
// }

    function recebeEventoForm(evento){
        evento.preventDefault();
        console.log("Não enviado")
    }

    form.addEventListener("submit", recebeEventoForm)
}