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

function buyable5(){
    console.log("clicked the dumbaass")
}