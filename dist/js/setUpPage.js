import { CategoryIdEnum } from "../models/recipe.interface.js";
import { categories } from "./database.js";
var url = window.location.href;
var categoriesLoaded = localStorage.getItem("categories")
    ? JSON.parse(localStorage.getItem("categories"))
    : categories;
var categorias = [];
var categoriesKeys = Object.keys(CategoryIdEnum);
var categoriesTypes = CategoryIdEnum;
categoriesKeys.forEach(function (el) {
    if (url.includes(el)) {
        categorias = categoriesLoaded.filter(function (element) { return element.categoryId === categoriesTypes[el]; });
    }
});
var sectionRecipes = document.querySelector(".recipes");
categorias.forEach(function (category) {
    return category.recipes.forEach(function (recipe) {
        var _a;
        var divRecipe = document.createElement("div");
        divRecipe.classList.add("recipe");
        var recipeTitle = document.createElement("h2");
        recipeTitle.textContent = recipe.name;
        var recipeIcons = document.createElement("ul");
        recipeIcons.classList.add("icons");
        recipeIcons.innerHTML = "    \n        <li class=\"icon-li\">\n            <img src=\"imagens/clock.png\" alt=\"clock icon\" class=\"icon-image\">\n            <p>".concat(recipe.preparationTime, "min</p>\n        </li>\n        <li class=\"icon-li\">\n            <img src=\"imagens/bowl.png\" alt=\"bowl\" class=\"icon-image\">\n            <p>").concat(recipe.revenue, " fatias</p>\n        </li>    \n    ");
        var recipeSection = document.createElement("section");
        recipeSection.classList.add("recipe-session");
        var recipeImage = document.createElement("img");
        recipeImage.setAttribute("src", recipe.image);
        recipeImage.setAttribute("alt", recipe.name);
        recipeImage.classList.add("image-recipe");
        var divMethodOfPreparation = document.createElement("div");
        divMethodOfPreparation.classList.add("method-of-preparation");
        var ingredientsListUl = document.createElement("ul");
        ingredientsListUl.classList.add("ingredients-list");
        var ingredientsListLi = document.createElement("li");
        ingredientsListLi.classList.add("ingredients-li");
        var listSubtitle = document.createElement("h3");
        listSubtitle.classList.add("list-subtitle");
        listSubtitle.textContent = "Ingredientes: ";
        var itemsList = document.createElement("ul");
        itemsList.classList.add("items-list");
        (_a = recipe.ingredients) === null || _a === void 0 ? void 0 : _a.forEach(function (element) {
            var ingredientLi = document.createElement("li");
            var ingredient = document.createElement("span");
            ingredient.textContent = element;
            ingredientLi.appendChild(ingredient);
            itemsList.appendChild(ingredientLi);
        });
        var methodOfPreparationLi = document.createElement("li");
        var methodOfPreparationTitle = document.createElement("h3");
        methodOfPreparationTitle.textContent = "Modo de Preparo: ";
        var methodOfPreparationP = document.createElement("p");
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
    });
});
