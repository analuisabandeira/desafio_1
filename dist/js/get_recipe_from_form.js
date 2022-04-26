import { categories } from "./database.js";
import { atribuirEventoEmUmElemento } from "./form.js";
import { checkRecipe, toValidatesRecipe } from "./validatesRecipe.js";
// Seleciona o botão "Adicionar Ingrediente" direto do HTML
var buttonNewIngredient = document.getElementById("button-new-ingredient");
// Seleciona o botão "Adicionar Receita" direto do HTML
var buttonForm = document.getElementById("form-button");
//Prepara um array para receber todos os ingredientes que o usuário enviar, colocando cada um em uma posição no array.
var allIngredients = [];
//Envia cada ingrediente para o array
function addIngredient() {
    var ingredient = document.getElementById("ingredients");
    var ingredientName = ingredient.value;
    allIngredients.push(ingredientName);
    var ingredientsAbbr = document.getElementById("div-ingredients");
    ingredientsAbbr.setAttribute("title", "Ingredientes: ".concat(allIngredients.join(", ")));
    ingredient.value = "";
}
atribuirEventoEmUmElemento(buttonNewIngredient, addIngredient, "click");
//  Pega os valores dos inputs do form e converte em um objeto;
function getRecipesFromForm() {
    // Seleciona o formulário "New Recipe" direto do HTML
    var form = document.getElementById("form-new-recipe");
    var image = form["image"].value;
    var imagePath = image.substring(12, image.length);
    console.log(imagePath);
    var recipe = {
        categoryId: form.category.value,
        recipe: {
            name: form.recipeName.value,
            preparationTime: form.preparationTime.value,
            revenue: form.revenue.value,
            image: "imagens/".concat(imagePath),
            ingredients: allIngredients,
            methodOfPreparation: form.methodOfPreparation.value,
        },
    };
    return recipe;
}
function addRecipe(event) {
    var form = document.getElementById("form-new-recipe");
    event.preventDefault();
    var recipeForm = getRecipesFromForm();
    checkRecipe(recipeForm);
    var recipeAlreadyEntered = toValidatesRecipe(recipeForm);
    if (recipeAlreadyEntered) {
        alert("A receita j\u00E1 foi adicionada anteriormente!");
        return;
    }
    var validRecipe = recipeForm.recipe;
    categories.map(function (el) {
        if (el.categoryId === recipeForm.categoryId) {
            el.recipes.push(validRecipe);
        }
    });
    localStorage.setItem("categories", JSON.stringify(categories));
    form.reset();
}
atribuirEventoEmUmElemento(buttonForm, addRecipe, "click");
