function alertButton() {
    
}
function Random_Number() {
    const input = document.getElementById("number");
    const inputValue = input.value;
    RanNumber = Math.floor(Math.random() * 10);
    if (inputValue > 10) {
        document.getElementById('output').innerText = "ARE YOU A FUCKING IDIOT THIS IS NOT A NUMBER BETWEEN 1 AND 10"
    } else {
        if (inputValue < 0) {
            document.getElementById('output').innerText = "ARE YOU A FUCKING IDIOT THIS IS NOT A NUMBER BETWEEN 1 AND 10"
    } else {
        if (inputValue == RanNumber) {
            document.getElementById('output').innerText = "YOU GEUSSED THE RIGHT NUMBER!!! YIPEEE"
        } else {
            document.getElementById('output').innerText = "HAHAHHAHA LOSER TRY AGAIN"
    }
}
