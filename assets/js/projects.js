let projects = [
  {
    id: 1,
    title: "12 Acres Beer",
    subtitle: "E-commerce website",
    description:
      "This is an e-commerce website that I built for a local craft beer company in my area. It was build using Django. Users can buy beer using fake Stripe details.",
    skills: [
      "html5",
      "css3",
      "javascript",
      "python",
      "django",
      "bootstrap",
      "heroku",
    ],
    repo: "https://github.com/farrelleoin93/12-acres-beer",
    site: "https://farrelleoin93-12-acres.herokuapp.com/",
    image: "./assets/images/projects/12-acres-devices.png",
    alt: "The 12 Acres responsive image",
  },
  {
    id: 2,
    title: "The Seed Shelf",
    subtitle: "Gardening website",
    description:
      "This website was built as a tool to teach people of all gardening experience to grow vegetables, fruit and flowers.",
    skills: [
      "html5",
      "css3",
      "javascript",
      "python",
      "jquery",
      "heroku",
      "materialize.svg",
    ],
    repo: "https://github.com/farrelleoin93/milestone-3-seed-shelf",
    site: "https://the-seed-shelf.herokuapp.com/",
    image: "./assets/images/projects/seed-shelf-devices.png",
    alt: "The Seed Shelf responsive image",
  },
  {
    id: 3,
    title: "Discover Vietnam",
    subtitle: "Travel website",
    description:
      "This is a travel website for Vietnam, it gives users information about things to do in three of the main tourist areas in Vietnam. It also has a Google maps component so that users can see where the popular places are on the map.",
    skills: ["html5", "css3", "javascript", "jquery", "bootstrap"],
    repo: "https://github.com/farrelleoin93/Milestone-2",
    site: "https://farrelleoin93.github.io/Milestone-2/",
    image: "./assets/images/projects/vietname-devices.png",
    alt: "Discover Vietnam responsive image",
  },
  {
    id: 4,
    title: "Famished",
    subtitle: "Recipe website",
    description:
      "This is a recipe website, users can view recipes and follow along with the instructions to make a delicious meal. This was the first project that I built for Code Institute's Diploma.",
    skills: ["html5", "css3", "bootstrap"],
    repo: "https://github.com/farrelleoin93/Milestone-1-Recipe-Site",
    site: "https://farrelleoin93.github.io/Milestone-1-Recipe-Site/",
    image: "./assets/images/projects/famished-devices.png",
    alt: "Famished responsive image",
  },
];
let html = "";

projects.map(project => {
    html += `
      <div class="row pb-5">
         <div class="col-sm-12 col-md-6 ${
           project.id % 2 === 0 ? "order-first order-md-last" : ""
         } project-image-container">
            <div class="project-image">
               <img src="${project.image}" alt="${project.alt}">
            </div>
         </div>
         <div class="col-sm-12 col-md-6 project-info-container">
            <h3>${project.title}</h3>
            <h5 class="text-muted">${project.subtitle}</h5>
            <p>${project.description}</p>
            <div class="icons-mini-container d-flex">`;
   

      project.skills.forEach(skill => {
         if(skill.includes('.svg')){
            html += `
            <div class="skills-icon-image">
               <img src="./assets/images/skills/${skill.toLowerCase()}" alt="${skill.slice(0,-4)} Logo">
            </div>`;
         }else{
            html += `
            <div class="skills-icon">
               <i class="devicon devicon-${skill}-plain" aria-hidden="true"></i>
            </div>`
         }


   })
               
      html += `
         </div>
            <div class="project-button-container">
                  <a href="${project.repo}" target="_blank" class="button">Repo</a>
                  <a href="${project.site}" target="_blank" class="button">Live Site</a>
            </div>
         </div>
      </div>`;      
});

document.getElementById('all-projects').innerHTML = html;
