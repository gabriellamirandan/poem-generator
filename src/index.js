function generatePoem (event){
    event.preventDefault();
    let poemElement = document.querySelector("#poem");
    new Typewriter("#poem", {
        strings: 'Of everything to my love I will be attentive Before, and with such zeal, and always, and so much That even in the face of the greatest charm',
        autoStart: true,
        delay: 40,
        cursor: "",
      })
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);