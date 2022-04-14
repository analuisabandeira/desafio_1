const url = window.location.href;

let categorias = [];

const categoriesTypes = {
    
    "datas_festivas": "1",
    "sobremesas": "2",
    "tortas_salgadas": "3",
    "receitas_saudaveis": "4",
    "sopas": "5"
}

const categoriesKeys = Object.keys(categoriesTypes);
console.log(categoriesKeys);

categoriesKeys.forEach(el => {

    if (url.includes(el)) {

        categorias = categories.filter(element => element.categoryId === categoriesTypes[el]);
    }
});

const sectionRecipes = document.querySelector(".recipes");

categorias.forEach(category => category.recipes.forEach(recipe => {

    const divRecipe = document.createElement("div");
    divRecipe.classList.add("recipe");

    const recipeTitle = document.createElement("h2");
    recipeTitle.textContent = recipe.name;

    const recipeIcons = document.createElement("ul");
    recipeIcons.classList.add("icons");

    recipeIcons.innerHTML = `    
        <li class="icon-li">
            <img src="imagens/clock.png" alt="clock icon" class="icon-image">
            <p>${recipe.preparationTime}</p>
        </li>
        <li class="icon-li">
            <img src="imagens/bowl.png" alt="bowl" class="icon-image">
            <p>${recipe.revenue}</p>
        </li>    
    `

    const recipeSection = document.createElement("section");
    recipeSection.classList.add("recipe-session");

    const recipeImage = document.createElement("img");
    recipeImage.setAttribute("src", recipe.image);
    recipeImage.setAttribute("alt", recipe.name);
    recipeImage.classList.add("image-recipe");

    const divMethodOfPreparation = document.createElement("div");
    divMethodOfPreparation.classList.add("method-of-preparation");

    const ingredientsListUl = document.createElement("ul");
    ingredientsListUl.classList.add("ingredients-list");

    const ingredientsListLi = document.createElement("li");
    ingredientsListLi.classList.add("ingredients-li");

    const listSubtitle = document.createElement("h3");
    listSubtitle.classList.add("list-subtitle");
    listSubtitle.textContent = "Ingredientes: ";

    const itemsList = document.createElement("ul");
    itemsList.classList.add("items-list");

    recipe.ingredients?.forEach(element => {

        const ingredientLi = document.createElement("li");

        const ingredient = document.createElement("span");
        ingredient.textContent = element;

        ingredientLi.appendChild(ingredient);
        itemsList.appendChild(ingredientLi);
    });    

    const methodOfPreparationLi = document.createElement("li");

    const methodOfPreparationTitle = document.createElement("h3");
    methodOfPreparationTitle.textContent = "Modo de Preparo: "

    const methodOfPreparationP = document.createElement("p");
    methodOfPreparationP.textContent = recipe.methodOfPreparation;

    
    sectionRecipes.appendChild(divRecipe);
    divRecipe.appendChild(recipeTitle);
    divRecipe.appendChild(recipeIcons);
    divRecipe.appendChild(recipeSection);
    recipeSection.appendChild(recipeImage);
    recipeSection.appendChild(divMethodOfPreparation);
    divMethodOfPreparation.appendChild(ingredientsListUl);
    ingredientsListUl.appendChild(ingredientsListLi);
    ingredientsListLi.appendChild(listSubtitle);
    ingredientsListLi.appendChild(itemsList);
    ingredientsListUl.appendChild(methodOfPreparationLi);
    methodOfPreparationLi.appendChild(methodOfPreparationTitle);
    methodOfPreparationLi.appendChild(methodOfPreparationP);
    
}));









