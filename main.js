// console.log("JS file linked succussfully")

// Select elements
var plusBtns = Array.from(document.querySelectorAll('.fa-circle-plus'));
var minusBtns = Array.from(document.querySelectorAll('.fa-circle-minus'));
var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deleteBtns = Array.from(document.querySelectorAll(".fa-trash"));
var cards = Array.from(document.querySelectorAll(".card"));



// Favorites ( Like Button )
for ( let fav of favs )(
        fav.addEventListener('click', function() {
            if ( fav.style.color != 'red') {    // Check if the color is not equal to red
                ( fav.style.color = 'red' )
            } else{
                ( fav.style.color = 'black' )
            }
        })
)

// Remove btn
for ( let i in deleteBtns ) {
    deleteBtns[i].addEventListener("click", function() {
        cards[i].remove()
        total()
    })
}

    // Plus btn
    for ( let plusBtn of plusBtns ) {
        plusBtn.addEventListener("click", function() {
            plusBtn.nextElementSibling.innerHTML++
            total()
        })
    } 
    
    // Minus btn
    for ( let minusBtn of minusBtns ) {
        minusBtn.addEventListener("click", function() {
            minusBtn.previousElementSibling.innerHTML > 0 ? minusBtn.previousElementSibling.innerHTML-- : null
            total()
        })
    }

    // Function Total Price
    function total() {
        let qte = Array.from(document.querySelectorAll(".counter"));
        let price = Array.from(document.querySelectorAll(".unit-price"))
        let s = 0
        //console.log(qte)
        //console.log(price)
        for ( let i = 0; i < price.length; i++ ) {
            s = s + price[i].innerHTML * qte[i].innerHTML;
            
        }
        document.getElementById("totalPrice").innerHTML = s; 
    }
