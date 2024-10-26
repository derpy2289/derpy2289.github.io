function alertButton() {
    
}
function Random_Number() {
    const input = document.getElementById("number");
    const inputValue = input.value;
    RanNumber = Math.floor(Math.random() * 10);
    if (inputValue == RanNumber) {
        document.getElementById('output').innerText = "YOU GEUSSED THE RIGHT NUMBER!!! YIPEEE"
    } else {
        document.getElementById('output').innerText = "HAHAHHAHA LOSER TRY AGAIN"
    }
}
