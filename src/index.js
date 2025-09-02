//alert("Hello World");
function displayCS(response) {
  console.log("Clifton Strengths thought generated");
  new Typewriter("#strengths", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateCS(event) {
  event.preventDefault();

  //let csStrengthsElement = document.querySelector("#strengths");
  //csStrengthsElement.innerHTML =
  //"Here is the Clifton Strenghts though of the day.";

  //build api url

  let instructionsInput = document.querySelector("#user-instructions");
  let apikey = "aeb5f974f5fbo4929b0t4d7036cd803d";
  let prompt = `User instructions: Generate a Clifton Strengths thought of the day about ${instructionsInput.value}`;
  let context =
    "You are an expert on all Clifton Strengths.  Your mission is to generate a thought of the day for a Clifton Strengths word that a person can use to improve their strengths. Make sure to follow User instrutions. Sign the results with SheCodes AI inside a <strong> element";
  let apiurl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;

  let strengthsElement = document.querySelector("#strengths");
  strengthsElement.classList.remove("hidden");

  strengthsElement.innerHTML = `<div id="loading-msg" class="blink">Generating Clifton Strengths Thought of the Day for your strength ${instructionsInput.value}...</div>
`;

  //build the call to api (axios)

  axios.get(apiurl).then(displayCS);
  //display the generated clifton strengths thought of the day
}

let csFormElement = document.querySelector("#cs-generator-form");
csFormElement.addEventListener("submit", generateCS);
