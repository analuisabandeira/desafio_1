// Função genérica que permite adicionar qualquer evento a um elemento; 

function atribuirEventoEmUmElemento(elemento, funcao, evento) {

    elemento.addEventListener(evento, funcao);
}

const openFormButton = document.querySelector("#checkbox-form");
const closeFormButton = document.querySelector(".close-form");

const formNewRecipe = document.querySelector(".div-new-recipe");
const highlightsForm = document.querySelector("#overlay");


const addClasse = function() {

    formNewRecipe.classList.add("active");
    highlightsForm.classList.add("active");
};

const removeClass =  function() {
    
    formNewRecipe.classList.remove("active");
    highlightsForm.classList.remove("active");
};

atribuirEventoEmUmElemento(openFormButton, addClasse, "click");

atribuirEventoEmUmElemento(highlightsForm, removeClass, "click");

atribuirEventoEmUmElemento(closeFormButton, removeClass, "click");

