const options = [ "✊", "✋", "✌️" ];

const H = "human won";
const C = "computer won";

const resultsCompHuman = {
  "✊": {
    "✌️": C,
    "✋": H,
  },
  "✋": {
    "✌️": H,
    "✊": C,
  },
  "✌️": {
    "✊": H,
    "✋": C,
  },
};

function outcome(comp, human) {
  if (comp === human) return 'draw';

  return resultsCompHuman[comp][human];
}

const inputSection = document.querySelector('#input');
const compSection = document.querySelector('#comp');
const outputSection = document.querySelector('#output');

for (const option of options) {
  let el = document.createElement('button');
  el.textContent = option;
  el.addEventListener('click', play);
  inputSection.appendChild(el);

  el = document.createElement('div');
  el.className = 'hand';
  el.textContent = option;
  compSection.appendChild(el);
}

outputSection.textContent = 'computer has made choice, human will now choose';


function play(e) {
  const button = e.target;

  const compChoice = options[Math.floor(Math.random()*options.length)];
  const humanChoice = button.textContent;

  highlightCompChoice(compChoice);

  outputSection.textContent =
    " human clicked " + humanChoice +
    " and computer had " + compChoice +
    " so " + outcome(compChoice, humanChoice);
}

function highlightCompChoice(compChoice) {
  for (const el of document.querySelectorAll('#comp .hand')) {
    if (el.textContent === compChoice) {
      el.style.display = "inline-block";
    } else {
      el.style.display = "none";
    }
  }
}
