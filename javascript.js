function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]
}

function oneRound(playerSelection, computerSelection) {
    let playerLower = playerSelection.toLowerCase()
    let computerLower = computerSelection.toLowerCase()


    if (playerLower == computerLower) {
        console.log("A tie! Play again!")
        /*oneRound(playerSelection, computerSelection)*/
    }

    else if (playerLower == "rock" && computerLower == "paper") {
        console.log("You lose! Paper beats rock!")
        return "computer_win"
    }

    else if (playerLower == "rock" && computerLower == "scissors") {
        console.log("You win! Rock beats scissors!")
        return "player_win"
    }

    else if (playerLower == "paper" && computerLower == "rock") {
        console.log("You win! Paper beats rock!")
        return "player_win"
    }

    else if (playerLower == "paper" && computerLower == "scissors") {
        console.log("You lose! Scissors beats paper!")
        return "computer_win"
    }

    else if (playerLower == "scissors" && computerLower == "paper") {
        console.log("You win! Scissors beats paper!")
        return "player_win"
    }

    else if (playerLower == "scissors" && computerLower == "rock") {
        console.log("You lose! Scissors beats rock!")
        return "computer_win"
    }

}

function game() {
    computer_score = 0
    player_score = 0

    while (computer_score < 5 && player_score < 5) {
        console.log(computer_score, player_score)
        let player_guess = prompt("Rock, paper, or scissors: ")
        let outcome = oneRound(player_guess, getComputerChoice())
        if (outcome == "player_win") {
            player_score = player_score + 1
        }

        else if ("outcome == computer_win") {
            computer_score = computer_score + 1
        }
    }

    if (computer_score == 5) {
        console.log("Computer wins!")
    }

    else if (player_score == 5) {
        console.log("Player wins!")
    }
}


game()