// Função genérica que permite adicionar qualquer evento a um elemento; 

export function atribuirEventoEmUmElemento(elemento:HTMLElement, funcao: (event:Event) => void, evento:string): void {

    elemento.addEventListener(evento, funcao);
}

const openFormButton = (document.querySelector("#checkbox-form") as HTMLElement); 
const closeFormButton = (document.querySelector(".close-form") as HTMLElement);

const formNewRecipe = (document.querySelector(".div-new-recipe") as HTMLElement);
const highlightsForm = (document.querySelector("#overlay") as HTMLElement);


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