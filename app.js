function Random_Number() {
    const input = document.getElementById("number2");
    const inputValue = input.value;
    const RanNumber = Math.floor(Math.random() * 10) + 1;
    
    if (inputValue > 10 || inputValue <= 0) {
        document.getElementById("output").innerText = "ARE YOU A FUCKING IDIOT THIS IS NOT A NUMBER BETWEEN 1 AND 10";
    } else if (inputValue == RanNumber) {
        document.getElementById("output").innerText = "YOU GUESSED THE RIGHT NUMBER!!! YIPEEE, THE NUMBER WAS " + RanNumber;
    } else {
         document.getElementById("output").innerText = "HAHAHHAHA LOSER TRY AGAIN, THE NUMBER WAS " + RanNumber;
    }
}
