const p1 = {
  score: 0,
  button: document.querySelector('#p1Button'),
  display: document.querySelector('#p1Display')
}
const p2 = {
  score: 0,
  button: document.querySelector('#p2Button'),
  display: document.querySelector('#p2Display')
}

/* const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display'); */

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

/* let p1Score = 0;
let p2Score = 0; */
let winningScore = 5;
let isGameover = false;

const updateScore = (player, opponent) => {
  if (!isGameover) {
    player.score += 1;
    if (player.score === winningScore) { // 점수UI 업데이트 하기 전에 게임 종료 시키기
      isGameover = true;
      player.display.classList.add('has-text-success');
      opponent.display.classList.add('has-text-danger');
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener('click', function() {
  updateScore(p1, p2);
})
p2.button.addEventListener('click', function() {
  updateScore(p2, p1);
})


/* p1Button.addEventListener('click', () => {
  if (!isGameover) {
    p1Score += 1;
    if (p1Score === winningScore) { // 점수UI 업데이트 하기 전에 게임 종료 시키기
      isGameover = true;
      p1Display.classList.add('has-text-success');
      p2Display.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Button.addEventListener('click', () => {
  if (!isGameover) {
    p2Score += 1;
    if (p2Score === winningScore) {
      isGameover = true;
      p2Display.classList.add('has-text-success');
      p1Display.classList.add('has-text-danger');
      p1Button.disabled = true;
      p2Button.disabled = true;
    }
    p2Display.textContent = p2Score;
  }
}); */

const reset = () => {
  isGameover = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
  }
/*   p1Score = 0;
  p2Score = 0;
  p1Display.textContent = 0;
  p2Display.textContent = 0;
  p1Display.classList.remove('has-text-success', 'has-text-danger');
  p2Display.classList.remove('has-text-success', 'has-text-danger');
  p1Button.disabled = false;
  p2Button.disabled = false; */
}


winningScoreSelect.addEventListener('change', (event) => {
  winningScore = parseInt(event.target.value);
  reset();
});

resetButton.addEventListener('click', reset);