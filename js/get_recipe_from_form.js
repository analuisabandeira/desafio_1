// Seleciona o botão "Adicionar Ingrediente" direto do HTML
const buttonNewIngredient = document.getElementById("button-new-ingredient");

// Seleciona o botão "Adicionar Receita" direto do HTML
const buttonForm = document.getElementById("form-button");

//Prepara um array para receber todos os ingredientes que o usuário enviar, colocando cada um em uma posição no array.

const allIngredients = [];

//Envia cada ingrediente para o array
function addIngredient() {

    const ingredient = document.getElementById("ingredients").value;
    allIngredients.push(ingredient);
    
    const ingredientsAbbr = document.getElementById("div-ingredients");

    ingredientsAbbr.setAttribute("title", `Ingredientes: ${allIngredients.join(", ")}`); 


    document.getElementById("ingredients").value = "";
    console.log(allIngredients);
}

atribuirEventoEmUmElemento(buttonNewIngredient, addIngredient, "click");


//  Pega os valores dos inputs do form e converte em um objeto;
function getRecipesFromForm() {

    // Seleciona o formulário "New Recipe" direto do HTML
    const form = document.getElementById("form-new-recipe");
    const image = form.image.value;
    const imagePath = image.substring(12, image.length);
    console.log(imagePath);

    const recipe = {

        categoryId: form.category.value,
        recipe: 
            {
                name: form.name.value,
                preparationTime: form.preparationTime.value,
                revenue: form.revenue.value,
                image: `imagens/${imagePath}`,
                ingredients: allIngredients,
                methodOfPreparation: form.methodOfPreparation.value,
            }
        
    }

    return recipe;
} 

function addRecipe(event) {

    const form = document.getElementById("form-new-recipe");

    event.preventDefault();
   
    const recipeForm = getRecipesFromForm();
   
    checkRecipe(recipeForm);

    // if (errors.length > 0) {

    //     displaysErrorsMessages(errors);
    //     return;
    // } 
    
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
