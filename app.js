let titleText = document.querySelector("#title-text");
let addBtn = document.querySelector("#add-btn");
let ulCont = document.querySelector(".todo-lists");
let toDolists = document.querySelector(".todo-lists");

addBtn.addEventListener("click", () => {
  if (titleText.value != "" || titleText.value.length > 0) {
    let list1 = document.createElement("li");
    list1.innerHTML = titleText.value;
    ulCont.appendChild(list1);
    // let span = document.createElement("span");
    // span.innerHTML = "\u00d7";
    // list1.appendChild(span);
  } else {
    alert("Enter something");
  }
  titleText.value = "";
});
1;

toDolists.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
  }
});
