function alertButton() {
    
}
function Random_Number() {
    const input = document.getElementById("number");
    const inputValue = input.value;
    RanNumber = Math.floor(Math.random() * 10);
    if (inputValue == RanNumber) {
        return "YOU GEUSSED THE RIGHT NUMBER!!! YIPEEE"
    } else {
        return "HAHAHHAHA LOSER TRY AGAIN"
    }
}
