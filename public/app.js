const names = ["Beatriz Constantino"];

const sectionListElement = document.getElementById("list-container");
const inputListAddElement = document.getElementById("list-add");
const buttonListAddElement = document.getElementsByClassName("btn")[0];

console.log(sectionListElement, inputListAddElement, buttonListAddElement);

const ulElement = document.createElement("ul");
ulElement.className = "list-names";

sectionListElement.append(ulElement);

names.forEach((name) => {
  const liElement = document.createElement("li");
  liElement.innerText = name;

  const buttonDeleteElement = document.createElement("button");
  buttonDeleteElement.innerHTML = "<strong>Excluir</strong>";
  
  buttonDeleteElement.addEventListener("click", (event) => {
    const currentTargetElement = event.currentTarget;
    const liParentElement = currentTargetElement.parentElement;
    liParentElement.remove();
  });

  liElement.append(" ", buttonDeleteElement);
  ulElement.append(liElement);
});

buttonListAddElement.addEventListener("click", (event) => {
  event.preventDefault();

  const inputValue = inputListAddElement.value.trim();

  if (inputValue === "") {
    return;
  }

  const liElement = document.createElement("li");
  const buttonDeleteElement = document.createElement("button");

  buttonDeleteElement.addEventListener("click", (event) => {
    const currentTargetElement = event.currentTarget;
    const liParentElement = currentTargetElement.parentElement;
    liParentElement.remove();
  });

  buttonDeleteElement.innerHTML = "<strong>Excluir</strong>";
  liElement.append(inputValue, "  ", buttonDeleteElement);
  ulElement.append(liElement);

  inputListAddElement.value = "";
});