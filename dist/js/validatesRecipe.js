// Verifica se existe uma receita com o mesmo nome no site;
import { categories } from "./database.js";
export function toValidatesRecipe(recipeForm) {
    if (recipeForm.recipe.name.length > 0) {
        var recipeExists = categories.some(function (category) {
            return category.recipes.some(function (recipe) {
                return recipe.name.toLowerCase() === recipeForm.recipe.name.toLowerCase();
            });
        });
        return recipeExists;
    }
}
// Verifica possíveis erros no ato de inserir a receita através do form e retorna um array de erros;
export function checkRecipe(recipeForm) {
    var recipeName = document.getElementById("name");
    var preparationTime = document.getElementById("preparationTime");
    var revenue = document.getElementById("revenue");
    var image = document.getElementById("image");
    var ingredients = document.getElementById("ingredients");
    var methodOfPreparation = document.getElementById("methodOfPreparation");
    if (recipeForm.recipe.name.length == 0) {
        recipeName.setAttribute("title", "Insira o nome da receita!");
    }
    if (recipeForm.recipe.preparationTime == 0) {
        preparationTime.setAttribute("oninvalid", "Insira o tempo de preparo da receita!");
    }
    if (recipeForm.recipe.revenue == 0) {
        revenue.setAttribute("oninvalid", "Insira o rendimento da receita!");
    }
    if (recipeForm.recipe.image.length == 0) {
        image.setAttribute("oninvalid", "Insira uma foto da sua receita!");
    }
    if (recipeForm.recipe.ingredients.length == 0) {
        ingredients.setAttribute("oninvalid", "Insira os ingredientes necess\u00E1rios para preparar a sua receita!");
    }
    if (recipeForm.recipe.methodOfPreparation.length == 0) {
        methodOfPreparation.setAttribute("oninvalid", "Insira o modo de preparo da receita!");
    }
    return;
}
