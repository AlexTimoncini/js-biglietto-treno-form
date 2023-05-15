const userAge = document.getElementById('userAge').value
const travelDistance = document.getElementById('travelDistance').value
const button = document.querySelector('#ticket_price .ivy_submit_btn')
let discount;
    if (userAge < 18){
        discount = 0.194;
    } else if (userAge > 65){
        discount = 0.377;
    } else {
        discount = 0;
    }
let ticketPrice = travelDistance * 0.233 * (1 - discount)

button.addEventListener('click', function(){
    console.log('Il prezzo del biglietto ammonta a :' + ticketPrice.toFixed(2) + '€');

})

