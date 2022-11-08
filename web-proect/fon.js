const button = document.getElementById("button");
const number = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

button.addEventListener("click", () => {
  let numberColor = generateNumber();
  document.body.style.backgroundColor = numberColor;
  color.textContent = numberColor;
});

function generateNumber() {
  let numberColor = "#";
  for (let i = 0; i < 6; i++) {
    numberColor += number[getRandomNumber()];
  }

  return numberColor;
}

function getRandomNumber() {
    return Math.floor(Math.random() * number.length);
}