let cartObj = []

// current things available for purcase: 
// should make it so that the purchases menu is a form that goes to a email

cartlink = document.getElementById("cart")

cartlink.addEventListener("click", () => {
    const destinationURL = 'cart.html';
    window.location.href = destinationURL;
})

addtocart1 = document.getElementById("add_test1")

addtocart1.addEventListener("click", () => {
    cartObj.push("test1")})

addtocart2 = document.getElementById("add_test2")

addtocart2.addEventListener("click", () => {
    cartObj.push("test2")})

addtocart3 = document.getElementById("add_test3")

addtocart3.addEventListener("click", () => {
    cartObj.push("test3")})

addtocart4 = document.getElementById("add_test4")

addtocart4.addEventListener("click", () => {
    cartObj.push("test4")})

addtocart5 = document.getElementById("add_test5")

addtocart5.addEventListener("click", () => {
    cartObj.push("test5")})

// pushtest = document.getElementById("pushtest")

// pushtest.addEventListener("click", () => {
//     console.log(cartObj)})
