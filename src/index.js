//alert("Hello World");
function generateCS(event) {
  event.preventDefault();

  //let csStrengthsElement = document.querySelector("#strengths");
  //csStrengthsElement.innerHTML =
  //"Here is the Clifton Strenghts though of the day.";

  new Typewriter("#strengths", {
    strings: ["Here is the Clifton Strenghts though of the day"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let csFormElement = document.querySelector("#cs-generator-form");
csFormElement.addEventListener("submit", generateCS);
