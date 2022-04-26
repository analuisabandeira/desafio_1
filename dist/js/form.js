// Função genérica que permite adicionar qualquer evento a um elemento; 
export function atribuirEventoEmUmElemento(elemento, funcao, evento) {
    elemento.addEventListener(evento, funcao);
}
var openFormButton = document.querySelector("#checkbox-form");
var closeFormButton = document.querySelector(".close-form");
var formNewRecipe = document.querySelector(".div-new-recipe");
var highlightsForm = document.querySelector("#overlay");
var addClasse = function () {
    formNewRecipe.classList.add("active");
    highlightsForm.classList.add("active");
};
var removeClass = function () {
    formNewRecipe.classList.remove("active");
    highlightsForm.classList.remove("active");
};
atribuirEventoEmUmElemento(openFormButton, addClasse, "click");
atribuirEventoEmUmElemento(highlightsForm, removeClass, "click");
atribuirEventoEmUmElemento(closeFormButton, removeClass, "click");
