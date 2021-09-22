const container = document.querySelector(".container");
const { animalsArray } = require("./cardList").default;

// created elements for the header

const header = (text) => {
  const header = document.createElement("div");
  header.classList.add("header");
  container.appendChild(header);

  const logoField = document.createElement("div");
  logoField.classList.add("header__logoField");
  header.appendChild(logoField);


  const logo = document.createElement("img");
  logo.classList.add('header__logo');
  logo.src = 'https://uploads-ssl.webflow.com/6097e0eca1e87557da031fef/609859a191abe5d64b17fed3_Patika%20logo.png';
  logoField.appendChild(logo);

  const title = document.createElement("h2");
  title.classList.add("header__title");
  title.textContent = text;
  header.appendChild(title);
};


// the generated instances were manipulated with the map method

const animals = () => {

  const cards = document.createElement("div");
  cards.classList.add("cards");
  container.appendChild(cards);
  animalsArray.map((animal) => {
    cards.innerHTML += `<div class='cards__cardBody'>
    <img class='cards__cardImage' src=${animal.image}></img>
    <h2 class='cards__cardTitle'>${animal.name}</h2>
    <div class='cards__cardInfo'><p class='cards__cardText'>Age : ${animal.age}</p><p class='cards__cardText'>Nubmer of legs : ${animal.numberOfLegs}</p><div class='cards__cardButtonField'><button class='cards__cardButton'>GET</button></div></div>
    </div>`;
  });
};

// created elements for the footer

const footer = () => {
  const footerField = document.createElement("div");
  footerField.classList.add('footer');
  footerField.innerHTML = `<a href="#">Facebook</a><a href="#">Twitter</a><a href="#">Instagram</a><a href="#"><b>0555 444 33 22</b></a>`;
  container.appendChild(footerField);
}

export default { header, animals, footer };
