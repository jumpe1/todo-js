import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

const deleteFromImcompleteList = (deleteTarget) => {
  document.getElementById("imcomplete-list").removeChild(deleteTarget);
};
const deleteFromCompleteList = (deleteTarget) => {
  document.getElementById("complete-list").removeChild(deleteTarget);
};

const createIncompleteList = (text) => {
  const span = document.createElement("span");
  span.className = "list-row";
  const li = document.createElement("li");
  li.innerText = text;

  document.getElementById("imcomplete-list").appendChild(span);
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    deleteFromImcompleteList(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerHTML;
    addTarget.textContent = null;

    const li = document.createElement("li");
    li.innerText = text;
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      deleteFromCompleteList(backButton.parentNode);

      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    document.getElementById("complete-list").appendChild(addTarget);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    deleteFromImcompleteList(deleteButton.parentNode);
  });

  span.appendChild(li);
  span.appendChild(completeButton);
  span.appendChild(deleteButton);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
