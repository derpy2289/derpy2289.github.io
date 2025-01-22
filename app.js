function Random_Number() {
    const input = document.getElementById("number");
    const inputValue = input.value;
    const RanNumber = Math.floor(Math.random() * 10) + 1;

    
    if (input == "e") {
        document.getElementById("output").innerText = "DONT PUT A FUCKING e or E. ARE YOU JACKSHIT CRAZY WTF ARE YOU DOING WITH YOUR LIFE GO DO SMTH PRODUCTIVE LIKE IDK TRANSLATE THIS MORSE CODE . . . - - - . . . - - - . . . - - - . . . - - MAYBE PLAYING WITH SOUND OR PUT IT INTO A TRANSLATOR WILL HELP GL";
    } else if (inputValue > 10 || inputValue <= 0) {
        document.getElementById("output").innerText = "ARE YOU A FUCKING IDIOT THIS IS NOT A NUMBER BETWEEN 1 AND 10";
    } else if (inputValue == RanNumber) {
        document.getElementById("output").innerText = "YOU GUESSED THE RIGHT NUMBER!!! YIPEEE, THE NUMBER WAS " + RanNumber;
    } else {
         document.getElementById("output").innerText = "HAHAHHAHA LOSER TRY AGAIN, THE NUMBER WAS " + RanNumber;
    }
}
