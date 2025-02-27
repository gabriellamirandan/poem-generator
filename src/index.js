function displayPoem(response) {
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 40,
        cursor: "",
    })
}

function generatePoem(event) {
    event.preventDefault();
    let instructionsInput = document.querySelector("#user-instructions")
    if (instructionsInput.value) {
        let apiKey = "3e46b86b8308faao2ct16f0ddbe04ffa"
        let prompt = `User instructions are: Generate a poem about ${instructionsInput.value}`;
        let context = "You are a specialist in poem from Brazil. Your mission is to generate a 4 line poem to be included in the <body> tag. Each line should have a <br> at the end, except the final line. Please don't include the word html in your answer. Make sure to follow the user instructions.";
        let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

        let poemElement = document.querySelector("#poem");
        poemElement.classList.remove("hidden");
        poemElement.innerHTML = `<div class="generating">Generating a poem for you about ${instructionsInput.value}</div>`

        axios.get(apiUrl).then(displayPoem);
    } else {
        alert("Please, write a topic for your poem")
    }
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);