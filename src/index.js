function displayPoem (response){
    console.log(response.data.answer);
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 40,
        cursor: "",
      })

      console.log("poem generated")
}

function generatePoem (event){
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions")
let apiKey = "3e46b86b8308faao2ct16f0ddbe04ffa"
let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
let context = "You are a specialist in poem from Brazil. Your mission is to generate a 4 line poem to be included in the <body> tag. Each line should have a <br> at the end, except the final line. Please don't include the word html in your answer. Make sure to follow the user instructions."; 
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generate poem");
console.log(`Prompt is ${prompt}`);
console.log(`Prompt is ${context}`);


axios.get(apiUrl).then(displayPoem);
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);