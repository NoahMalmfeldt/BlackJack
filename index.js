let firstCard = 0
let secondCard = 0
let thirdCard = 0
let fourthCard = 0
let fifthCard = 0
let sixthCard = 0
let seventhCard = 0
let sum = 0
let numberOfHits = 0
let maxHits=3
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
let cards = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

function reset() {
    firstCard = 0
    secondCard = 0
    fourthCard = 0
    fifthCard = 0
    sixthCard = 0
    seventhCard = 0
    sum = 0
    numberOfHits = 0
    cards.textContent = "Cards:" + firstCard + ", " + secondCard;
    sumEl.textContent = "Sum:" + sum
}

function startGame() {

    firstCard = Math.floor(Math.random() * 11) + 2;
    secondCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard
    numberOfHits = 0

    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        reset()
    }

    messageEl.textContent = message
    cards.textContent = "Cards:" + firstCard + ", " + secondCard;
    sumEl.textContent = "Sum:" + sum

}

function changeHits() {
    if(numberOfHits === 0) {
        hit()
    } else if(numberOfHits === 1) {
        hit2()
    } else if(numberOfHits === maxHits) {
        reset()
    } else if(numberOfHits === 2) {
        hit3()
    } else if(numberOfHits === 3) {
        hit4()
    } else {
        hit5()
    }

    numberOfHits += 1
}

function hit() {
    thirdCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard;
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        reset()
    }
    
    messageEl.textContent = message

}

function hit2() {
    fourthCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard;
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        reset()
    }
    
    messageEl.textContent = message

}

function hit3() {
    fifthCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard;
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        reset()
    }
    
    messageEl.textContent = message

}

function hit4() {
    sixthCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard;
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        reset()
    }
    
    messageEl.textContent = message

}

function hit5() {
    seventhCard = Math.floor(Math.random() * 11) + 2;
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard + ", " + seventhCard;
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        reset()
    }
    
    messageEl.textContent = message

}


