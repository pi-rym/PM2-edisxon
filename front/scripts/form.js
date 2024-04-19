

const formulario = Document.getElementById("formulario")
const clearButton = Document.getElementById("clearButton")

clearButton.addEventListener("click", function(){
    formulario.reset()
})