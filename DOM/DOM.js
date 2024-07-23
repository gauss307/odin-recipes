const container = document.querySelector("#container");
for (let i = 0; i <= 255; i++){
    const box = document.createElement("div")
    box.style.color = "blue";
    box.style.width = "32px";
    box.style.height = "32px";
    box.classList.add("boxes");
    box.style.borderStyle = "solid";
    box.style.borderColor = "black";
    box.style.boxSizing = "border-box";
    box.style.borderWidth = "1px";
    box.style.backgroundColor ="white";
    box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
    container.appendChild(box);
}

const button = document.querySelector("button");
const boxList = document.querySelectorAll(".boxes");

button.addEventListener("click", () => {
    const boxList = Array.from(document.querySelectorAll(".boxes"));
    let promptNumber = prompt("How many boxes do you want?");
    let boxNum = Number(promptNumber);
    let boxDim = 512 / boxNum;
    let boxDimMessage = boxDim + "px";
    let numOfBoxes = boxNum*boxNum;

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for(let i = 1; i<= numOfBoxes; i++){
        const box = document.createElement("div")
        box.style.width = boxDimMessage;
        box.style.backgroundColor = "white";
        box.style.height = boxDimMessage;
        box.classList.add("boxes");
        box.style.borderStyle = "solid";
        box.style.borderColor = "black";
        box.style.boxSizing = "border-box";
        box.style.borderWidth = "1px";
        
        box.addEventListener("mouseover", () => {
        box.style.backgroundColor = "black";
    });
    container.appendChild(box);
    }

    
});


