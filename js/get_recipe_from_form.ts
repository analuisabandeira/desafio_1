import { categories, IRecipe } from "./database.js";
import { atribuirEventoEmUmElemento } from "./form.js";
import { checkRecipe, toValidatesRecipe } from "./validatesRecipe.js";

// Seleciona o botão "Adicionar Ingrediente" direto do HTML
const buttonNewIngredient = document.getElementById("button-new-ingredient");

// Seleciona o botão "Adicionar Receita" direto do HTML
const buttonForm = document.getElementById("form-button");

//Prepara um array para receber todos os ingredientes que o usuário enviar, colocando cada um em uma posição no array.

const allIngredients:string[] = [];

//Envia cada ingrediente para o array
function addIngredient():void {
  
    const ingredient = document.getElementById("ingredients") as HTMLInputElement;

    let ingredientName = ingredient.value;
   
    allIngredients.push(ingredientName);  
    
    const ingredientsAbbr = document.getElementById("div-ingredients");

    ingredientsAbbr.setAttribute("title", `Ingredientes: ${allIngredients.join(", ")}`); 

    ingredient.value = "";
}

atribuirEventoEmUmElemento(buttonNewIngredient, addIngredient, "click");

export interface IRecipeForm {

    categoryId:string;
    recipe:IRecipe;

} 

//  Pega os valores dos inputs do form e converte em um objeto;
function getRecipesFromForm():IRecipeForm {

    // Seleciona o formulário "New Recipe" direto do HTML
    const form = (document.getElementById("form-new-recipe") as HTMLFormElement);
    const image = form["image"].value;
    const imagePath = image.substring(12, image.length);
    console.log(imagePath);

      
    const recipe:IRecipeForm = {

        categoryId: form.category.value,
        recipe: 
            {
                name: form.recipeName.value,
                preparationTime: form.preparationTime.value,
                revenue: form.revenue.value,
                image: `imagens/${imagePath}`,
                ingredients: allIngredients,
                methodOfPreparation: form.methodOfPreparation.value,
            }   
    }

    return recipe;
} 

function addRecipe(event:Event):void {

    const form = (document.getElementById("form-new-recipe") as HTMLFormElement);;

    event.preventDefault();
   
    const recipeForm = getRecipesFromForm();
   
    checkRecipe(recipeForm);
  
    const recipeAlreadyEntered = toValidatesRecipe(recipeForm);

    if (recipeAlreadyEntered) {
        
        alert(`A receita já foi adicionada anteriormente!`);
        return;
    }

    const validRecipe = recipeForm.recipe;

    categories.map(el => {
     
        if (el.categoryId === recipeForm.categoryId) {
            el.recipes.push(validRecipe);
        }        
    }) 

    localStorage.setItem("categories", JSON.stringify(categories));

    form.reset();
}

atribuirEventoEmUmElemento(buttonForm, addRecipe, "click");