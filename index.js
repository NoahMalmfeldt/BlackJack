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

    reset()
    firstCard = Math.floor(Math.random() * 10) + 2;
    secondCard = Math.floor(Math.random() * 10) + 2;
    ace1();
    ace2();
    cards.textContent = "Cards:" + firstCard + ", " + secondCard;
    aceSum1()
    aceSum2()
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
    }

    messageEl.textContent = message
    sumEl.textContent = "Sum:" + sum

}

function changeHits() {
    if(numberOfHits === 0) {
        hit()
        ace3()
    } else if(numberOfHits === 1) {
        hit2()
        ace4()
    } else if(numberOfHits === maxHits) {
        reset()
    } else if(numberOfHits === 2) {
        hit3()
        ace5()
    } else if(numberOfHits === 3) {
        hit4()
        ace6()
    } else {
        hit5()
        ace7()
    }

    numberOfHits += 1
}

function hit() {
    thirdCard = Math.floor(Math.random() * 10) + 2;
    ace1()
    ace2()
    ace3()
    ace4()
    ace5()
    ace6()
    ace7()
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard;
    aceSum1()
    aceSum2()
    aceSum3()
    aceSum4()
    aceSum5()
    aceSum6()
    aceSum7()
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}

function hit2() {
    fourthCard = Math.floor(Math.random() * 10) + 2;
    ace1()
    ace2()
    ace3()
    ace4()
    ace5()
    ace6()
    ace7()
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard;
    aceSum1()
    aceSum2()
    aceSum3()
    aceSum4()
    aceSum5()
    aceSum6()
    aceSum7()
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}

function hit3() {
    fifthCard = Math.floor(Math.random() * 10) + 2;
    ace1()
    ace2()
    ace3()
    ace4()
    ace5()
    ace6()
    ace7()
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard;
    aceSum1()
    aceSum2()
    aceSum3()
    aceSum4()
    aceSum5()
    aceSum6()
    aceSum7()
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}

function hit4() {
    sixthCard = Math.floor(Math.random() * 10) + 2;
    ace1()
    ace2()
    ace3()
    ace4()
    ace5()
    ace6()
    ace7()
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard;
    aceSum1()
    aceSum2()
    aceSum3()
    aceSum4()
    aceSum5()
    aceSum6()
    aceSum7()
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}

function hit5() {
    seventhCard = Math.floor(Math.random() * 10) + 2;
    ace1()
    ace2()
    ace3()
    ace4()
    ace5()
    ace6()
    ace7()
    cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard + ", " + seventhCard;
    aceSum1()
    aceSum2()
    aceSum3()
    aceSum4()
    aceSum5()
    aceSum6()
    aceSum7()
    sum = firstCard + secondCard + thirdCard + fourthCard + fifthCard + sixthCard + seventhCard
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
    }
    
    messageEl.textContent = message

}

function ace1() {
    if((firstCard === 11) || (firstCard === 1)) {
        firstCard = "A"
    }
}

function ace2() {
    if((secondCard === 11) || (secondCard === 1)) {
        secondCard = "A"
    }
}

function ace3() {
    if((thirdCard === 11) || (thirdCard === 1)) {
        thirdCard = "A"
        cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard;
    }
}

function ace4() {
    if((fourthCard === 11) || (fourthCard === 1)) {
        fourthCard = "A"
        cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard;
    }
}

function ace5() {
    if((fifthCard === 11) || (fifthCard === 1)) {
        fifthCard = "A"
        cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard;
    }
}

function ace6() {
    if((sixthCard === 11) || (sixthCard === 1)) {
        sixthCard = "A"
        cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard;
    }
}

function ace7() {
    if((seventhCard === 11) || (seventhCard === 1)) {
        seventhCard = "A"
        cards.textContent = "Cards:" + firstCard + ", " + secondCard + ", " + thirdCard + ", " + fourthCard + ", " + fifthCard + ", " + sixthCard + ", " + seventhCard;
    }
}

function aceSum1() {
    if((firstCard === "A") && (sum + 11 > 21)) {
        firstCard = 1
    } else if((firstCard ==="A") && (sum + 11 < 21)) {
        firstCard = 11
    }
}

function aceSum2() {
    if((secondCard === "A") && (sum + 11 > 21)) {
        secondCard = 1
    } else if((secondCard ==="A") && (sum + 11 < 21)) {
        secondCard = 11
    }
}

function aceSum3() {
    if((thirdCard === "A") && (sum + 11 > 21)) {
        thirdCard = 1
    } else if((thirdCard ==="A") && (sum + 11 < 21)) {
        thirdCard = 11
    }
}

function aceSum4() {
    if((fourthCard === "A") && (sum + 11 > 21)) {
        fourthCard = 1
    } else if((fourthCard ==="A") && (sum + 11 < 21)) {
        fourthCard = 11
    }
}

function aceSum5() {
    if((fifthCard === "A") && (sum + 11 > 21)) {
        fifthCard = 1
    } else if((fifthCard ==="A") && (sum + 11 < 21)) {
        fifthCard = 11
    }
}

function aceSum6() {
    if((sixthCard === "A") && (sum + 11 > 21)) {
        sixthCard = 1
    } else if((sixthCard ==="A") && (sum + 11 < 21)) {
        sixthCard = 11
    }
}

function aceSum7() {
    if((seventhCard === "A") && (sum + 11 > 21)) {
        seventhCard = 1
    } else if((seventhCard ==="A") && (sum + 11 < 21)) {
        seventhCard = 11
    }
}


