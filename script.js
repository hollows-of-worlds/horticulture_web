let cartObj = []

// current things available for purcase: 
// should make it so that the purchases menu is a form that goes to a email

cartlink = document.getElementById("cart")

cartlink.addEventListener("click", () => {
    const destinationURL = 'cart.html';
    window.location.href = destinationURL;
})

// addtocart1 = document.getElementById("day_lily")

// addtocart1.addEventListener("click", () => {
//     cartObj.push("Day lily")})

// addtocart2 = document.getElementById("trellis_flower_white")

// addtocart2.addEventListener("click", () => {
//     cartObj.push("White trellis flower")})

// addtocart3 = document.getElementById("sunflower")

// addtocart3.addEventListener("click", () => {
//     cartObj.push("Sunflower")})

// addtocart4 = document.getElementById("assortment_red_white")

// addtocart4.addEventListener("click", () => {
//     cartObj.push("Red and white flower assortment")})

// addtocart5 = document.getElementById("assortment_pink_white")

// addtocart5.addEventListener("click", () => {
//     cartObj.push("Pink and white flower assortment")})
// console.log(cartObj)
// pushtest = document.getElementById("pushtest")

// pushtest.addEventListener("click", () => {
//     console.log(cartObj)})

// const params = new URLSearchParams();

// params.append('category', 'shoes');
// params.append('color', 'blue');
// params.append('color', 'red'); // Appends another color parameter
// params.set('sort', 'price'); // Sets the sort parameter (overwrites if it exists)
// params.delete('category'); // Removes the 'category' parameter

// console.log(params.toString());
// Output: "color=blue&color=red&sort=price"

// function addToCart(item,currentItems){
//     currentItems.append(item);
//     console.log(currentItems);
//     return(currentItems);
// }

// Function to add items to the cart
function addToCart(itemName) {
    // 1. Get the existing cart from localStorage, or an empty array if it's new
    let cart = JSON.parse(localStorage.getItem('myCart')) || [];

    // 2. Add the new item
    cart.push(itemName);

    // 3. Save it back to localStorage
    localStorage.setItem('myCart', JSON.stringify(cart));

    alert(itemName + " added to cart!");
}
function clearCart():

// Logic for the Cart Page (Run this only if we are on the cart page)
if (document.getElementById('cart_pg1')) {
    const displayArea = document.getElementById('cart_pg1');
    const savedCart = JSON.parse(localStorage.getItem('myCart')) || [];

    if (savedCart.length === 0) {
        displayArea.innerHTML = "Your cart is empty.";
    } else {
        displayArea.innerHTML = "Items: <br>" + savedCart.join('<br>');
    }
}
