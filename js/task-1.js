const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];
const refs = {
    startButton: document.querySelector('button[data-action="start"]'),
    stopButton: document.querySelector('button[data-action="stop"]'),
};

const randomIntegerFromInterval = (max) => {
    return Math.floor(Math.random() * (max + 1));
  };

const setRandomColor = () => {
    const color = colors[randomIntegerFromInterval(colors.length - 1)]
    document.body.style.backgroundColor = color
}

let timerId = null;
let isColorChangeOn = false;

refs.startButton.addEventListener('click', changeColorStart);
refs.stopButton.addEventListener('click', changeColorStop);

function changeColorStart(e){
    isColorChangeOn = true;
    if(isColorChangeOn){
        refs.startButton.setAttribute('disabled', 'true');
    }
    timerId = setInterval(() => setRandomColor(), 1000);
} 

function changeColorStop(e){
    clearInterval(timerId);
    refs.startButton.removeAttribute('disabled');
};