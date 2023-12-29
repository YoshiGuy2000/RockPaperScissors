function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"]
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]

}

function oneRound(playerSelection) {
    let computerSelection = getComputerChoice()
    let playerLower = playerSelection.toLowerCase()
    let computerLower = computerSelection.toLowerCase()
    let game_text = document.getElementById("results")

    if (playerLower == computerLower) {
        game_text.textContent = "A tie! Play again!"
        //console.log("A tie! Play again!")
        /*oneRound(playerSelection, computerSelection)*/
    }

    else if (playerLower == "rock" && computerLower == "paper") {
        game_text.textContent = "You lose! Paper beats rock!"
        //console.log("You lose! Paper beats rock!")
        return "computer_win"
    }

    else if (playerLower == "rock" && computerLower == "scissors") {
        game_text.textContent = "You win! Rock beat scissors!"
        //console.log("You win! Rock beats scissors!")
        return "player_win"
    }

    else if (playerLower == "paper" && computerLower == "rock") {
        game_text.textContent = "You win! Paper beats rock!"
        //console.log("You win! Paper beats rock!")
        return "player_win"
    }

    else if (playerLower == "paper" && computerLower == "scissors") {
        game_text.textContent = "You win! Scissors beats paper!"
        //console.log("You lose! Scissors beats paper!")
        return "computer_win"
    }

    else if (playerLower == "scissors" && computerLower == "paper") {
        game_text.textContent = "You win! Scissors bears paper!"
        //console.log("You win! Scissors beats paper!")
        return "player_win"
    }

    else if (playerLower == "scissors" && computerLower == "rock") {
        game_text.textContent = "You lose! Scissors beats rock!"
        //console.log("You lose! Scissors beats rock!")
        return "computer_win"
    }

    else {
        console.log("Button works, no response")
    }

}

function game() {
    computer_score = 0
    player_score = 0

    while (computer_score < 5 && player_score < 5) {
        let score_text = document.getElementById("score")
        score_text.textContent = ("Player: ${player_score} Computer: ${computer_score}")
        console.log(computer_score, player_score)
        //let player_guess = prompt("Rock, paper, or scissors: ")
        //let outcome = oneRound(player_guess, getComputerChoice())

        let outcome = button_click
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

function test() {
    console.log("This button works!")
}

function button_click() {
    outcome = document.getElementById("rock").addEventListener("click", () => { oneRound("Rock") })
    outcome = document.getElementById("paper").addEventListener("click", () => { oneRound("Paper") })
    outcome = document.getElementById("scissors").addEventListener("click", () => { oneRound("Scissors") })
    return outcome
}

game()