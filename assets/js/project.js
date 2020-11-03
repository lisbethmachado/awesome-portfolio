/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Spacebook",
    cardImage: "assets/images/project-page/spacebook.png",
    description:
      "Martians can see the current weather for Mars, check on photos from nearby rovers, and manage a task list.",
    Previewlink: "https://spacebook-mars.herokuapp.com/signup",
    Githublink: "https://github.com/lisbethmachado/spacebook-mars",
  },
  {
    title: "Over The Top Beauty",
    cardImage: "assets/images/project-page/preview.png",
    description:
      "An appointment booking and e-commerce application for a small business using React and Web API's.",
    Previewlink: "https://www.instagram.com/overthetopbeauty/",
    Githublink: "https://github.com/lisbethmachado/over-the-top-beauty",
  },
  {
    title: "Emosic",
    cardImage: "assets/images/project-page/music.jpg",
    description:
      "Music Recommendation Engine built using jQuery and Web API's.",
    Previewlink: "https://lisbethmachado.github.io/emosic/",
    Githublink: "https://github.com/lisbethmachado/emosic",
  },
  {
    title: "Donut Maker",
    cardImage: "assets/images/project-page/MVP-dohnuts.png",
    description:
      "An app to make unique donuts for Homer Simpson built using basic React.",
    Previewlink: "https://dohnuts-app.herokuapp.com/",
    Githublink: "https://github.com/lisbethmachado/dohnuts",
  },
  {
    title: "ReadMe Generator",
    cardImage: "assets/images/project-page/proReadme.png",
    description:
      "An app that allows developers to generate professional readMe files for any project using Node.",
    Previewlink: "https://lisbethmachado.github.io/pro-readme/",
    Githublink: "https://github.com/lisbethmachado/pro-readme",
  },
  {
    title: "Budget Tracker",
    cardImage: "assets/images/project-page/budget-tracker.png",
    description:
      "A budget tracking app with offline functionality using IndexedDB.",
    Previewlink: "https://budgeting-tracker.herokuapp.com/",
    Githublink: "https://github.com/lisbethmachado/budget-tracker",
  },
  {
    title: "Password Generator",
    cardImage: "assets/images/project-page/password.png",
    description:
      "A random apssword generator with customizable fields using JavaScript.",
    Previewlink: "https://github.com/lisbethmachado/password-generator",
    Githublink: "https://lisbethmachado.github.io/password-generator/",
  },
  {
    title: "Sky Watcher",
    cardImage: "assets/images/project-page/weather.jpg",
    description:
      "A weather app built using JavaScript and Web API's.",
    Previewlink: "https://lisbethmachado.github.io/sky-watcher/",
    Githublink: "https://github.com/lisbethmachado/sky-watcher",
  },
  {
    title: "Minesweeper Game",
    cardImage: "assets/images/project-page/minesweeper.jpg",
    description:
      "Minesweeper Game built using python Object Oriented Programming.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Battery Life Calculator",
    cardImage: "assets/images/project-page/battery.png",
    description:
      "Built battery life calculator using Python.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Movie Recommendation System",
    cardImage: "assets/images/project-page/movie-recommendation.jpeg",
    description:
      "Movie Recommendation System built using Tensorflow.",
    Previewlink: "",
    Githublink: "",
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
          <div class="title-div">
            <h1 class="title"><a href="#">${title}</a></h1>
            </div>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
              <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
