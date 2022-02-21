//cette fonction renvoit un nombre random entre 0 et i exclus
function get_random_number(i){
    return Math.floor(Math.random() *i);
}

function roll_dices(){
    document.getElementById("previous_dice1").innerHTML = document.getElementById("dice1").innerHTML;
    document.getElementById("previous_dice2").innerHTML = document.getElementById("dice2").innerHTML;
    document.getElementById("dice1").innerHTML = `${1+get_random_number(6)}`;
    document.getElementById("dice2").innerHTML = `${get_random_number(6)}`;
}

document.getElementById("roll").addEventListener("click",roll_dices);

