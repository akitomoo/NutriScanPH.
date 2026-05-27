const products = [

{
    name: "Lucky Me Pancit Canton",
    calories: 290,
    sodium: "High",
    additives: "MSG, Flavor Enhancers",
    explain:
    "MSG enhances umami flavor and is common in processed foods."
},

{
    name: "Century Tuna Flakes in Oil",
    calories: 180,
    sodium: "Moderate",
    additives: "Preservatives",
    explain:
    "Preservatives help prevent microbial spoilage."
},

{
    name: "SkyFlakes Crackers",
    calories: 120,
    sodium: "Moderate",
    additives: "Leavening Agents",
    explain:
    "Leavening agents improve texture and crispness."
},

{
    name: "Bear Brand Milk",
    calories: 150,
    sodium: "Low",
    additives: "Vitamin Fortification",
    explain:
    "Fortification adds essential vitamins and minerals."
},

{
    name: "C2 Green Tea",
    calories: 90,
    sodium: "Low",
    additives: "Flavoring, Preservatives",
    explain:
    "Preservatives maintain shelf stability."
},

{
    name: "Oishi Prawn Crackers",
    calories: 160,
    sodium: "High",
    additives: "Artificial Flavoring",
    explain:
    "Flavorings improve product taste and aroma."
},

{
    name: "Del Monte Pineapple Juice",
    calories: 110,
    sodium: "Low",
    additives: "Ascorbic Acid",
    explain:
    "Ascorbic acid acts as an antioxidant."
},

{
    name: "Argentina Corned Beef",
    calories: 210,
    sodium: "High",
    additives: "Curing Agents",
    explain:
    "Curing agents preserve meat color and shelf life."
},

{
    name: "UFC Banana Ketchup",
    calories: 70,
    sodium: "Moderate",
    additives: "Food Coloring",
    explain:
    "Food coloring improves visual appearance."
},

{
    name: "Jack 'n Jill Piattos",
    calories: 150,
    sodium: "High",
    additives: "Flavor Enhancers",
    explain:
    "Flavor enhancers intensify savory taste."
}

];

/* PAGE NAVIGATION */

function showPage(pageId){

    const pages =
    document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document
    .getElementById(pageId)
    .classList.add("active");
}

/* PRODUCT SEARCH */

function searchProduct(){

    const input =
    document
    .getElementById("searchInput")
    .value
    .toLowerCase();

    const results =
    document.getElementById("results");

    results.innerHTML = "";

    const filteredProducts =
    products.filter(product =>
        product.name
        .toLowerCase()
        .includes(input)
    );

    if(filteredProducts.length === 0){

        results.innerHTML =
        "<p>No product found.</p>";

        return;
    }

    filteredProducts.forEach(product => {

        results.innerHTML += `

        <div class="card">

            <h3>${product.name}</h3>

            <p>
                <strong>Calories:</strong>
                ${product.calories}
            </p>

            <p>
                <strong>Sodium Level:</strong>
                ${product.sodium}
            </p>

            <p>
                <strong>Additives:</strong>
                ${product.additives}
            </p>

            <p>
                <strong>Food Tech Explain Mode:</strong>
                ${product.explain}
            </p>

        </div>

        `;
    });
}
