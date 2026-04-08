let scoreHome = 0
let scoreGuest = 0
let scoreHomeEl = document.getElementById("score-home-el")
let scoreGuestEl = document.getElementById("score-guest-el")

function addOnePointHome() {
    scoreHome += 1
    scoreHomeEl.textContent = scoreHome
}

function addTwoPointHome() {
    scoreHome += 2
    scoreHomeEl.textContent = scoreHome
}

function addThreePointHome() {
    scoreHome += 3
    scoreHomeEl.textContent = scoreHome
}


function addOnePointGuest() {
    scoreGuest += 1
    scoreGuestEl.textContent = scoreGuest
}

function addTwoPointGuest() {
    scoreGuest += 2
    scoreGuestEl.textContent = scoreGuest
}

function addThreePointGuest() {
    scoreGuest += 3
    scoreGuestEl.textContent = scoreGuest
}

function reset() {
    scoreHome = 0
    scoreGuest = 0
    scoreHomeEl.textContent = scoreHome
    scoreGuestEl.textContent = scoreGuest
    
}