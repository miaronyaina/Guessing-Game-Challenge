const output = document.querySelector('.output');
const myInput = document.querySelector('.box input');

const btn = document.querySelector('.box button');
const spanLabel = document.querySelector('.box span');
const game = {
min: 8,
max: 10,
guesses: 0
};
startFun();
btn.addEventListener('click', btnClicked);
for (let i = 0; i < 100; i++) {
//console.log(makeRandom(1,10));
}
function startFun() {
	btn.textContent = 'Guess';
game.guesses = 0;
game.min = 1;
game.max = makeRandom(10, 20);
myInput.style.display = 'inline';
spanLabel.style.display = 'inline';
game.ran = makeRandom(game.min, game.max);
message(`Guess a number from ${game.min} - ${game.max}`, 'black');
myInput.setAttribute('type', 'number');
myInput.setAttribute('min', game.min);
myInput.setAttribute('max', game.max);
myInput.value = Math.floor((game.max - game.min) / 2) + game.min;
}

function btnClicked() {
if (btn.textContent == 'Restart') {
startFun();
} else {
start();
}
}

function start() {
game.guesses++;
const val = Number(myInput.value);
if (val == game.ran) {
message(`Correct, it was ${game.ran}. It took you ${game.guesses}
guesses.`, 'green');
btn.textContent = 'Restart';
myInput.style.display = 'none';
spanLabel.style.display = 'none';
} else if (val < game.ran) {
const v = ((val + 1) == game.max) ? '' : `${val+1} - ${game.max}`;
message(`Too low guess a number ${v}`, 'red');
} else {
const v = (game.min == (val - 1)) ? '' : `${game.min} - ${val-1}`;
message(`Too High guess a number ${v}`, 'red');
}
}

function makeRandom(min, max) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}
function message(val, fontC) {
output.innerHTML = val;
output.style.color = fontC;
}
