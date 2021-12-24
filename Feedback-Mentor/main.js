const hamburger = document.getElementById("hamburger");
const card = document.getElementById("card");
const card2 = document.getElementById("card2");

function showCards(){
    if (card.style.display&& card2.style.display === "block") {
        card.style.display = "none";
        card2.style.display = "none";
        hamburger.className = 'fas fa-bars';
    }else{
        hamburger.className = 'fas fa-times';
        card.style.display = "block";
        card2.style.display = "block";
    } 
}