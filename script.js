let num = Math.floor(Math.random() * 100) + 1;
console.log("Random number:", num);

let prev = [];
let numgusee = 10;

let input = document.querySelector("#input");
let hint = document.querySelector("#hint");
let prevDisplay = document.querySelector("#prev");
let remainingDisplay = document.querySelector("#remaining");

document.querySelector("button").addEventListener("click", () => {
  let guessedValue = parseInt(input.value);

  if (isNaN(guessedValue)) {
    hint.innerHTML = "Please enter a valid number!";
    return;
  }

  if (guessedValue === num) {
    hint.innerHTML = "🎉 You won! The correct number was " + num;
    input.disabled = true;
    document.querySelector("button").disabled = true;
    input.value = "";
  } else {
    numgusee -= 1;
    prev.push(guessedValue);

    if (guessedValue > num) {
      hint.innerHTML = "Your guess is too high! Try a smaller number.";
    } else {
      hint.innerHTML = "Your guess is too low! Try a larger number.";
    }
    prevDisplay.innerHTML = `Previous values: ${prev.join(", ")}`;
    remainingDisplay.innerHTML = `Remaining guesses: ${numgusee}`;

    if (numgusee === 0) {
      hint.innerHTML =
        "Game over! You've run out of guesses. The correct number was " + num;
      input.disabled = true;
      document.querySelector("button").disabled = true;
    }

    input.value = "";
  }
});
