const frankPlus = document.getElementById('frank-plus');
const frankMinus = document.getElementById('frank-minus');
const frankScore = document.getElementById('frank-score');
const maxPlus = document.getElementById('max-plus');
const maxMinus = document.getElementById('max-minus');
const maxScore = document.getElementById('max-score');
let frankCurrentScore = 0;
let maxCurrentScore = 0;

frankScore.innerHTML = frankCurrentScore;
maxScore.innerHTML = maxCurrentScore;

frankPlus.addEventListener("click", () => {
    frankCurrentScore += 1;
    frankScore.innerHTML = frankCurrentScore;
});

frankMinus.addEventListener("click", () => {
    frankCurrentScore -= 1;
    frankScore.innerHTML = frankCurrentScore;
});

maxPlus.addEventListener("click", () => {
    maxCurrentScore += 1;
    maxScore.innerHTML = maxCurrentScore;
});

maxMinus.addEventListener("click", () => {
    maxCurrentScore -= 1;
    maxScore.innerHTML = maxCurrentScore;
});
