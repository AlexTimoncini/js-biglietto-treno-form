const userAge = document.getElementById('userAge')
const travelDistance = document.getElementById('travelDistance')
const button = document.querySelector('#ticket_price .ivy_submit_btn')
let discount;
let ticketPrice;

button.addEventListener('click', function(){
    if (userAge.value < 18){
        discount = 0.194;
    } else if (userAge.value > 65){
        discount = 0.377;
    } else {
        discount = 0;
    }
    ticketPrice = travelDistance.value * 0.233 * (1 - discount)
    document.getElementById('output').innerHTML = 'Il prezzo del biglietto ammonta a :' + ticketPrice.toFixed(2) + '€';
})