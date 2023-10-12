
const textInput = document.querySelector("#input");
const createButton = document.querySelector("#btn");
const outputDiv = document.querySelector("#tasks");

createButton.addEventListener("click", () => {
    
    const newDiv = document.createElement("div");

    const newSpan = document.createElement("span");
    newSpan.textContent = textInput.value;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "удалить";

    deleteButton.addEventListener("click", () => {
        outputDiv.removeChild(newDiv);
    });

    newDiv.appendChild(newSpan);
    newDiv.appendChild(deleteButton);

    outputDiv.appendChild(newDiv);

    textInput.value = "";
});
