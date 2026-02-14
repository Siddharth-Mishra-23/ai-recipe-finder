function generateRecipe() {
    const ingredients = document.getElementById("ingredients").value.trim();
    const diet = document.getElementById("diet").value;
    const output = document.getElementById("output");

    if (!ingredients) {
        output.innerHTML = "⚠️ Please enter ingredients first!";
        return;
    }

    output.innerHTML = `
        <div class="loader"></div>
        <p style="text-align:center;">Generating magic recipe...</p>
    `;

    setTimeout(() => {
        const fakeRecipe = `Recipe Name: Ultimate ${diet} Special Delight

Cooking Time: 25 minutes

Ingredients:
- ${ingredients}
- Salt & spices

Steps:
1. Mix all ingredients.
2. Cook on medium flame.
3. Serve hot and enjoy!`;

        typeWriterEffect(fakeRecipe, output);
    }, 2000);
}

function typeWriterEffect(text, element) {
    element.innerHTML = "";
    let i = 0;

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 15);
        }
    }

    typing();
}
