// Verifica se existe uma receita com o mesmo nome no site;

function toValidatesRecipe(recipeForm) {

    if (recipeForm.recipe.name.length > 0) {
        
        const recipeExists = categories.some(category => {
            return category.recipes.some(recipe => {
                return recipe.name.toLowerCase() === recipeForm.recipe.name.toLowerCase()
            });
        }
        )
        return recipeExists;
    }
}

// Verifica possíveis erros no ato de inserir a receita através do form e retorna um array de erros;

function checkRecipe() {

    const recipeForm = getRecipesFromForm();

    const recipeName = document.getElementById("name");

    const preparationTime = document.getElementById("preparationTime");

    const revenue = document.getElementById("revenue");

    const image = document.getElementById("image");

    const ingredients = document.getElementById("ingredients");

    const methodOfPreparation = document.getElementById("methodOfPreparation");



    if (recipeForm.recipe.name.length == 0) {

        recipeName.setAttribute("tit", `Insira o nome da receita!`);
    }

    if (recipeForm.recipe.preparationTime.length == 0) {

        preparationTime.setAttribute("oninvalid", `Insira o tempo de preparo da receita!`);
    }

    if (recipeForm.recipe.revenue.length == 0) {

        revenue.setAttribute("oninvalid", `Insira o rendimento da receita!`);
    }

    if (recipeForm.recipe.image.length == 0) {

        image.setAttribute("oninvalid", `Insira uma foto da sua receita!`);
    }

    if (recipeForm.recipe.ingredients.length == 0) {

        ingredients.setAttribute("oninvalid", `Insira os ingredientes necessários para preparar a sua receita!`);
    }

    if (recipeForm.recipe.methodOfPreparation.length == 0) {

        methodOfPreparation.setAttribute("oninvalid", `Insira o modo de preparo da receita!`);
    }

    return;
}