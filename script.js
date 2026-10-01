
let cartCount = 0;


// Add product to cart

function addToCart() {

    cartCount++;

    document.getElementById("cartCount").textContent = cartCount;

    alert("Product added to cart!");
}


// Show special offer

function showOffer() {

    alert(
        "🎉 Special Offer!\n\n" +
        "Get up to 30% OFF on selected products.\n" +
        "Shop now and enjoy the discount!"
    );
}
