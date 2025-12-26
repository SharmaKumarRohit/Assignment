const formElem = document.querySelector("form");
const greetName = document.querySelector(".greet-name");
const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    const boxId = e.target.dataset.id;
    const styleElem = e.target.style;
    switch (boxId) {
      case "1":
        styleElem.backgroundColor = "red";
        styleElem.color = "#121212";
        break;
      case "2":
        styleElem.backgroundColor = "blue";
        styleElem.color = "#f0f0f0";
        break;
      case "3":
        styleElem.backgroundColor = "green";
        styleElem.color = "#f0f0f0";
        break;
      case "4":
        styleElem.backgroundColor = "yellow";
        styleElem.color = "#121212";
        break;
    }
  });
});

formElem.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = document.querySelector('input[type="text"]');
  greetName.textContent = ", " + inputVal.value;
  inputVal.value = "";
});
