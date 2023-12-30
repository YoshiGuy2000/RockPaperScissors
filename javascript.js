let computer_score = 0
let player_score = 0

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
    }

    else if (playerSelection == "rock" & computerSelection == "paper") {
        game_text.textContent = "You lose! Paper beats rock!"
        computer_score = computer_score + 1
        change_score()
        return "computer_win"
    }

    else if (playerSelection == "rock" & computerSelection == "scissors") {
        game_text.textContent = "You win! Rock beat scissors!"
        player_score = player_score + 1
        change_score()
        return "player_win"
    }

    else if (playerSelection == "paper" & computerSelection == "rock") {
        game_text.textContent = "You win! Paper beats rock!"
        player_score = player_score + 1
        change_score()
        return "player_win"
    }

    else if (playerSelection == "paper" & computerSelection == "scissors") {
        game_text.textContent = "You win! Scissors beats paper!"
        computer_score = computer_score + 1
        change_score()
        return "computer_win"
    }

    else if (playerSelection == "scissors" & computerSelection == "paper") {
        game_text.textContent = "You win! Scissors bears paper!"
        player_score = player_score + 1
        change_score()
        return "player_win"
    }

    else if (playerSelection == "scissors" & computerSelection == "rock") {
        game_text.textContent = "You lose! Scissors beats rock!"
        computer_score = computer_score + 1
        change_score()
        return "computer_win"
    }

    else {
        console.log("Button works, no response")
    }

}

function change_score() {
    let score_text = document.querySelector("#score")
    score_text.textContent = (`Player: ${player_score} Computer: ${computer_score}`)

    if (player_score == 5) {
        const body = document.querySelector("body")
        const player_win = document.createElement("div")
        player_win.textContent = "Player wins! Congrats!"
        body.append(player_win)
    } 

    else if (computer_score == 5) {
        const body = document.querySelector("body")
        const comp_win = document.createElement("div")
        comp_win.textContent = "Computer wins! The machines will destroy us :-(."
        body.append(comp_win)
    }

    else {
        
    }
}


const rock_btn = document.querySelector("#rock")
rock_btn.addEventListener('click', () => { oneRound("rock") })

const paper_btn = document.querySelector("#paper")
paper_btn.addEventListener('click', () => { oneRound("paper") })

const scissors_btn = document.querySelector("#scissors")
scissors_btn.addEventListener('click', () => { oneRound("scissors") })

