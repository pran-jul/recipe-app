// Sample recipe data
const recipesData = [
    {
        name: "Spaghetti Carbonara",
        ingredients: ["spaghetti", "eggs", "bacon", "parmesan", "black pepper"],
        steps: [
            "Cook spaghetti according to package instructions.",
            "In a bowl, whisk eggs and grated parmesan.",
            "Fry bacon until crispy, then chop into pieces.",
            "Toss cooked spaghetti with bacon and egg mixture.",
            "Season with black pepper and serve."
        ]
    },
    {
        name: "Grilled Cheese Sandwich",
        ingredients: ["bread", "cheese", "butter"],
        steps: [
            "Butter one side of each slice of bread.",
            "Place cheese between slices of bread, buttered side out.",
            "Grill on a pan over medium heat until golden and crispy on both sides."
        ]
    },
    {
        name: "Tomato Soup",
        ingredients: ["tomatoes", "onion", "garlic", "vegetable stock", "cream"],
        steps: [
            "Chop tomatoes, onion, and garlic.",
            "Cook onion and garlic in a pot with some olive oil until softened.",
            "Add tomatoes and vegetable stock. Simmer for 30 minutes.",
            "Blend the soup until smooth, then stir in cream.",
            "Serve hot with a garnish of herbs or croutons."
        ]
    }
];

// Function to search recipes based on an ingredient
function searchRecipe() {
    const ingredient = document.getElementById("ingredient").value.toLowerCase();
    const results = recipesData.filter(recipe =>
        recipe.ingredients.some(ing => ing.toLowerCase().includes(ingredient))
    );

    displayRecipes(results);
}

// Function to display recipes in the recipe list
function displayRecipes(recipes) {
    const recipesContainer = document.getElementById("recipes");
    recipesContainer.innerHTML = "";

    if (recipes.length > 0) {
        recipes.forEach(recipe => {
            const recipeCard = document.createElement("div");
            recipeCard.classList.add("recipe-card");
            recipeCard.innerHTML = `
                <h3>${recipe.name}</h3>
                <p>Ingredients: ${recipe.ingredients.slice(0, 3).join(", ")}...</p>
            `;
            recipeCard.onclick = () => showRecipeDetails(recipe);
            recipesContainer.appendChild(recipeCard);
        });
    } else {
        recipesContainer.innerHTML = "<p>No recipes found with that ingredient.</p>";
    }
}

// Function to show detailed recipe view
function showRecipeDetails(recipe) {
    const recipeDetails = document.getElementById("recipe-details");
    recipeDetails.innerHTML = `
        <h2>${recipe.name}</h2>
        <h3>Ingredients:</h3>
        <ul>
            ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
        </ul>
        <h3>Steps:</h3>
        <ol>
            ${recipe.steps.map(step => `<li>${step}</li>`).join('')}
        </ol>
    `;
    recipeDetails.style.display = "block";
}
