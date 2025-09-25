document.getElementById("img1").addEventListener("click", rock);
document.getElementById("img2").addEventListener("click", paper);
document.getElementById("img3").addEventListener("click", sissors);

let display = document.getElementById("display");
let myval = document.getElementById("myval");
let randval = document.getElementById("randomval");

let rock_paper_scissors = {
    rock: 1,
    paper: 2,
    scissors: 3
};

let userval;

function rock() {
    userval = rock_paper_scissors.rock;
    myval.textContent = "rock";
}

function paper() {
    userval = rock_paper_scissors.paper;
    myval.textContent = "paper";
}

function sissors() {
    userval = rock_paper_scissors.scissors;
    myval.textContent = "scissors";
}

function comptrock() {
    switch (userval) {
        case 1:
            display.textContent = "Draw";
            break;
        case 2:
            display.textContent = "You Win!";
            break;
        case 3:
            display.textContent = "You Lose!";
            break;
    }
}

function comptpaper() {
    switch (userval) {
        case 1:
            display.textContent = "You Lose!";
            break;
        case 2:
            display.textContent = "Draw";
            break;
        case 3:
            display.textContent = "You Win!";
            break;
    }
}

function comptsissors() {
    switch (userval) {
        case 1:
            display.textContent = "You Win!";
            break;
        case 2:
            display.textContent = "You Lose!";
            break;
        case 3:
            display.textContent = "Draw";
            break;
    }
}

function start() {
    if (!userval) {
        display.textContent = "Please select rock, paper, or scissors first.";
        return;
    }

    let compout = Math.floor(Math.random() * 3) + 1;
    randval.textContent="";
    switch (compout) {
        case 1:
            comptrock();
            randval.textContent = "rock";
            break;
        case 2:
            comptpaper();
            randval.textContent = "paper";
            break;
        case 3:
            comptsissors();
            randval.textContent = "scissors";
            break;
    }
}
