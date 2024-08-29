score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };

  function reset() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;
    document.querySelector(".js-result").innerHTML = "Restared";
    document.querySelector(".js-moves").innerHTML = "No Moves";
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function computer_move() {
    let random_number = Math.random();
    let computermove = "";
    if (random_number >= 0 && random_number < 1 / 3) {
      computermove = "rock";
    } else if (random_number > 1 / 3 && random_number <= 2 / 3) {
      computermove = "paper";
    } else if (random_number > 2 / 3 && random_number < 1) {
      computermove = "scissors";
    }
    return computermove;
  }


  let isAutoPlaying = false;
  let intervalId;

  function autoPlay(){
    if (!isAutoPlaying){
       intervalId = setInterval(function(){
        const playermove = computer_move();
        play(playermove)
      }, 1000);
      isAutoPlaying = true;
    } else {
      clearInterval(intervalId);
      isAutoPlaying = false;
    }
  }


  function play(playermove) {
    let computer = computer_move();
    let result = "";
    if (playermove === "scissors") {
      if (computer === "rock") {
        result = "You lose.";
      } else if (computer === "paper") {
        result = "You win.";
      } else if (computer === "scissors") {
        result = "Tie.";
      }
    } else if (playermove === "paper") {
      if (computer === "rock") {
        result = "You win.";
      } else if (computer === "paper") {
        result = "Tie.";
      } else if (computer === "scissors") {
        result = "You lose.";
      }
    } else if (playermove === "rock") {
      if (computer === "rock") {
        result = "Tie.";
      } else if (computer === "paper") {
        result = "You lose.";
      } else if (computer === "scissors") {
        result = "You win.";
      }
    }

    if (result === "You win.") {
      score.wins += 1;
    } else if (result === "You lose.") {
      score.losses += 1;
    } else if (result === "Tie.") {
      score.ties += 1;
    }
    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(
      ".js-moves"
    ).innerHTML = `You picked <img src=${playermove}.jpg class="move-icon">, Computer picked <img src=${computer}.jpg class="move-icon">`;
    document.querySelector(
      ".js-score"
    ).innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
  }