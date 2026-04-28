const inputBox = document.getElementById("inputBox") as HTMLTextAreaElement;
const timeDisplay = document.getElementById("time") as HTMLSpanElement;
const wpmDisplay = document.getElementById("wpm") as HTMLSpanElement;
const startBtn = document.getElementById("startBtn") as HTMLButtonElement;
 const txt = document.getElementById("txt") as HTMLParagraphElement;

let time = 0;
let timer: number =0;
let isRunning = false;
const sampleText ="TypeScript is a superset of JavaScript that adds extra features like static typing, interfaces, enums, and more. Essentially, TypeScript is JavaScript with additional syntax for defining types, making it a powerful tool for building scalable and maintainable applications."
console.log(timer);

function updateTime(): void {
    time++;
    timeDisplay.textContent = time.toString();
    calculateSpeed();
}

function startTest(): void {
    clearInterval(timer);
    inputBox.value = "";
    inputBox.disabled = false;
    // inputBox.focus();
    txt.textContent = sampleText

    time = 0;
    timeDisplay.textContent = "0";
    wpmDisplay.textContent = "0";

    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;

    }
}

startBtn.addEventListener("click", startTest);


function calculateSpeed(): void {

    const text = inputBox.value.trim();

    const words = text.split(/\s+/).length;
    let wordsPerMinutr=time>0?Math.round((words / time)*60):0;
    wpmDisplay.textContent = wordsPerMinutr.toString();
        if (inputBox.value.toLowerCase().replace(/\s+/g, " ")
                .trim() === sampleText.toLowerCase().replace(/\s+/g, " ").trim()) {
                clearInterval(timer);
                isRunning = false;
                inputBox.disabled = true;
                wpmDisplay.textContent = `WPM: ${Math.round((sampleText.split(" ")
                    .length / time) * 60)}`; 
                alert(`Test Completed! Your WPM: ${wpmDisplay.textContent.split(" ")[1]}`);
            }
}
inputBox.addEventListener("input", calculateSpeed);