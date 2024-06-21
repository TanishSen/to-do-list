const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

// function saveData() {
//   localStorage.setItem("data", listContainer.innerHTML);
// }
// function showTask() {
//   listContainer.innerHTML = localStorage.getItem("data");
// }

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  const retrievedData = localStorage.getItem("data");

  if (retrievedData) {
    listContainer.innerHTML = retrievedData;
  }
}

// Call the 'showTask' function when the page loads to display the saved data
window.addEventListener("DOMContentLoaded", showTask);

// Make sure to call the 'saveData' function whenever you add or remove tasks from the list container
