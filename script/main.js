const completedBtn = document.querySelectorAll(".box-completed");

for (const btnCompleted of completedBtn) {
  btnCompleted.addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Updated Successfully");
    const assignedTask = getInnerTextById("taskAssigned");
    // ---console.log(typeof assignedTask, assignedTask);----
    const valueOfBoard = getInnerTextById("boardValue");
    // ---console.log(typeof valueOfBoard, valueOfBoard);---

    const sumOfTask = assignedTask - 1;
    setInnerTextbyIdandValue("taskAssigned", sumOfTask);

    const sumOfBoardValue = valueOfBoard + 1;
    setInnerTextbyIdandValue("boardValue", sumOfBoardValue);
  });
}

//   -------button-1----
document
  .getElementById("completedBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title");
    handleToggle("completedBtn", true);
  });

//   ----button-2-----
document
  .getElementById("completedBtn2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title-2");

    handleToggle("completedBtn2", true);
  });

//  --- button-3---
document
  .getElementById("completedBtn3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title-3");
    handleToggle("completedBtn3", true);
  });

//   ---button-4---
document
  .getElementById("completedBtn4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title-4");
    handleToggle("completedBtn4", true);
  });

//   ---button-5---
document
  .getElementById("completedBtn5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    addTitle("title-5");
    handleToggle("completedBtn5", true);
  });

//   ----button-6---
document
  .getElementById("completedBtn6")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert("congratulation!!! You have completed all the current task");
    addTitle("title-6");
    handleToggle("completedBtn6", true);
  });

updateDate("addDate");

//   ----- button Activity Clear----

document
  .getElementById("activityBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("activity").style.display = "none";
  });
