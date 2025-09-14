let random = parseInt(Math.random() * 100 + 1);
console.log(random);

const submit = document.querySelector('#subt');
const guesslot = document.querySelector('.guesses');
const userinput = document.querySelector('#guessField');
const remaining = document.querySelector('.lastResult');
const loworhi = document.querySelector('.lowOrHi');
const startover = document.querySelector('.resultParas');

const p = document.createElement('p');

let preguess = [];
let numguess = 1;
let playgame = true;

if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validguess(guess);
  });
}

function validguess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess <= 0) {
    alert('Enter a number greater than 0');
  } else if (guess > 100) {
    alert('Enter a number smaller than or equal to 100');
  } else {
    preguess.push(guess);
    if (numguess === 11) {
      displayguess(guess);
      displaymsg(`Game Over 😢 The number was ${random}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}

function checkguess(guess) {
  if (guess === random) {
    displaymsg('🎉 You guessed it right!');
    endgame();
  } else if (guess < random) {
    displaymsg('📉 Guess is too low');
  } else if (guess > random) {
    displaymsg('📈 Guess is too high');
  }
}

function displayguess(guess) {
  userinput.value = '';
  guesslot.innerHTML += `${guess}, `;
  numguess++;
  remaining.textContent = `${11 - numguess}`;
}

function displaymsg(message) {
  loworhi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<button id="newgame">Start New Game</button>';
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector('#newgame');
  newgamebutton.addEventListener('click', function () {
    random = parseInt(Math.random() * 100 + 1);
    preguess = [];
    numguess = 1;
    guesslot.innerHTML = '';
    remaining.textContent = '10';
    userinput.removeAttribute('disabled');
    startover.removeChild(p);
    loworhi.innerHTML = '';
    playgame = true;
  });
}


