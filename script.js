let cartObj = []
// current things available for purcase: 
// should make it so that the purchases menu is a form that goes to a email

cartlink = document.getElementById("cart")

cartlink.addEventListener("click", () => {
    const destinationURL = 'cart.html';
    window.location.href = destinationURL;
})
