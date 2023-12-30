function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let choice = Math.floor(Math.random() * choices.length)
    return choices[choice]

}

function oneRound(player_item) {
    let computerSelection = getComputerChoice()
    let playerSelection = player_item
    let game_text = document.querySelector("#results")

    if (playerSelection == computerSelection) {
        game_text.textContent = "A tie! Play again!"
        /*oneRound(playerSelection, computerSelection)*/
    }

    else if (playerSelection == "rock" & computerSelection == "paper") {
        game_text.textContent = "You lose! Paper beats rock!"
        //console.log("You lose! Paper beats rock!")
        return "computer_win"
    }

    else if (playerSelection == "rock" & computerSelection == "scissors") {
        game_text.textContent = "You win! Rock beat scissors!"
        //console.log("You win! Rock beats scissors!")
        return "player_win"
    }

    else if (playerSelection == "paper" & computerSelection == "rock") {
        game_text.textContent = "You win! Paper beats rock!"
        //console.log("You win! Paper beats rock!")
        return "player_win"
    }

    else if (playerSelection == "paper" & computerSelection == "scissors") {
        game_text.textContent = "You win! Scissors beats paper!"
        //console.log("You lose! Scissors beats paper!")
        return "computer_win"
    }

    else if (playerSelection == "scissors" & computerSelection == "paper") {
        game_text.textContent = "You win! Scissors bears paper!"
        //console.log("You win! Scissors beats paper!")
        return "player_win"
    }

    else if (playerSelection == "scissors" & computerSelection == "rock") {
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
        let score_text = document.querySelector("#score")
        score_text.textContent = (`Player: ${player_score} Computer: ${computer_score}`)
        console.log(computer_score, player_score)
        //let player_guess = prompt("Rock, paper, or scissors: ")
        //let outcome = oneRound(player_guess, getComputerChoice())

        let outcome = button_click
        if (outcome == "player_win") {
            player_score = player_score + 1
        }

        else if (outcome == "computer_win") {
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

function button_click() {
    const rock_btn = document.querySelector("#rock")
    rock_btn.addEventListener('click', oneRound("Rock"))

    const paper_btn = document.querySelector("#paper")
    paper_btn.addEventListener('click', oneRound("Paper"))

    const scissors_btn = document.querySelector("#scissors")
    scissors_btn.addEventListener('click', oneRound("Scissors"))
    //outcome = document.getElementById("paper").addEventListener("click", () => { oneRound("Paper") })
    //outcome = document.getElementById("scissors").addEventListener("click", () => { oneRound("Scissors") })
    //return outcome
}

const rock_btn = document.querySelector("#rock")
rock_btn.addEventListener('click', () => { oneRound("rock") })

const paper_btn = document.querySelector("#paper")
paper_btn.addEventListener('click', () => { oneRound("paper") })

const scissors_btn = document.querySelector("#scissors")
scissors_btn.addEventListener('click', () => { oneRound("scissors") })