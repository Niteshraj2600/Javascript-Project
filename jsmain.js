const project = [
  {
    img: "./images/digitalClock.jpg",
    name: "Digital Clock",
    description:
      "A real-time digital clock displaying hours, minutes, and seconds.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/digital-clock/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/digital-clock",
  },
  {
    img: "./images/validation-form.jpg",
    name: "Form Validation",
    description:
      "A form validation that show user inputs are correct before submission.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/formvalid/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/formvalid",
  },
  {
    img: "./images/image-animation.jpg",
    name: "Image Animation",
    description: "An  animation effect applied to images .",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/imag-animation/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/imag-animation",
  },
  {
    img: "./images/image-search.png",
    name: "Image Search",
    description: "A web app that allows users to search and display images.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/image-search/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/image-search",
  },
  {
    img: "./images/job-finder.jpg",
    name: "Job Finder",
    description: "A job search platform that helps users find job .",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/job-finder/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/job-finder",
  },
  {
    img: "./images/notepad.png",
    name: "Notepad Website",
    description:
      "An online notepad allowing users to write, edit, and save notes in the browser.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/note-pad/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/note-pad",
  },
  {
    img: "./images/password-generator.png",
    name: "Password Generator",
    description:
      "A website that generates strong and secure passwords based on user preferences.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/password-generator/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/password-generator",
  },
  {
    img: "./images/product-cart.png",
    name: "Product Card",
    description:
      "A stylish product card showcasing details like price, image, and description.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/product-page/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/product-page",
  },
  {
    img: "./images/toast.png",
    name: "Toast Website",
    description:
      "A notification system that displays toast messages for user actions.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/toast/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/toast",
  },
  {
    img: "./images/country-search.png",
    name: "Country Search",
    description: "A search tool that provides details of a country.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/country-search/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/country-search",
  },
  {
    img: "./images/weatherApp.jpg",
    name: "Weather App",
    description:
      "A weather application that displays live weather data for any location.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/weat-app/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/weat-app",
  },
  {
    img: "./images/todo.jpg",
    name: "Todo App",
    description:
      "A note application that displays you to what was important daily u have to do.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/todo/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/todo",
  },
];

// ******************************************************

const html = [
  {
    img: "./images/airbnb.png",
    name: "AirBnb",
    description:
      "A real-time digital clock displaying hours, minutes, and seconds.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/Airbnb/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/Airbnb",
  },
  {
    img: "./images/social-book.png",
    name: "Textbook",
    description:
      "A real-time digital clock displaying hours, minutes, and seconds.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/facebook/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/facebook",
  },
  {
    img: "./images/crypto.png",
    name: "Crypto Tracker",
    description:
      "A real-time digital clock displaying hours, minutes, and seconds.",
    linkView:
      "https://Niteshraj2600.github.io/Javascript-Project/cyrpto/index.html",
    linkCode:
      "https://github.com/Niteshraj2600/Javascript-Project/tree/main/cyrpto",
  },
];

// ******************************************************************************* //

const projectCard = document.getElementById("project-card");
const htmlcssCard = document.getElementById("htmlcss-card");

// ********************* Function To Display *********************** //

function displayCard(filteredCard) {
  projectCard.innerHTML = ""; // Clear previous results
  filteredCard.forEach((project) => {
    const projCard = document.createElement("div");
    projCard.classList.add("proj-card");
    projCard.innerHTML = `<img src ="${project.img}" class="company-img"/>
    <h3>${project.name}</h3>
    <p>${project.description}</p> 
    <a href="${project.linkView}" target="_blank">
    <button id="searchLink">  View </button> </a>
    <a href="${project.linkCode}"  target="_blank">
     <button >Code</button> </a>  `;
    projectCard.appendChild(projCard);
  });
}

displayCard(project);

// <button id="searchLink" data-link="${project.linkView}">  View </button> //

// ********************* Function To Display   HTml CSS *********************** //

function displayCssCard(filteredCard) {
  htmlcssCard.innerHTML = ""; // Clear previous results
  filteredCard.forEach((html) => {
    const cssCard = document.createElement("div");
    cssCard.classList.add("css-card");
    cssCard.innerHTML = `<img src ="${html.img}" class="img"/>
      <h3>${html.name}</h3>
      <p>${html.description}</p> 
   <a href="${html.linkView}" target="_blank">
    <button id="searchLink">  View </button> </a>
    <a href="${html.linkCode}"  target="_blank">
     <button >Code</button> </a>  `;
    htmlcssCard.appendChild(cssCard);
  });
}

displayCssCard(html);

// <button id="css-btn" data-link="${html.linkView}">View</button>
// *******************     active class logic       ***********************************/

// Select all nav links
const navLinks = document.querySelectorAll(".navbar a");

// Function to handle active class
navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    // Remove active class from all links
    navLinks.forEach((nav) => nav.classList.remove("active"));

    // Add active class to the clicked link
    this.classList.add("active");
  });
});
