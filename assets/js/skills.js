languages = ['HTML5', 'CSS3', 'JavaScript', 'Python'];
tools = ["jQuery", 'React', "Django", "Flask", "Bootstrap", 'Materialize.png', 'MongoDB', 'mySQL', 'Git', 'Github', 'Heroku', 'VSCode', 'AWS.png', 'Slack', 'Stripe.png'];

let languagesHtml = ''
languages.map(language => {
    languagesHtml += `<div class="skills-icon col-6 col-md-3">
      <i class="devicon devicon-${language.toLowerCase()}-plain" aria-hidden="true"></i>
      <p class="text-muted">${language}</p>
    </div>`
})

document.getElementById('languages').innerHTML = languagesHtml;

let toolsHtml = ''
tools.map(tool => {
  if(tool.includes('.png')){
    console.log(tool);
    toolsHtml += `
    <div class="skills-icon">
      <img src="./assets/images/skills/${tool.toLowerCase()}" alt="${tool.slice(0, -4)}">
      <p class="text-muted">${tool.slice(0, -4)}</p>
    </div>`;
  } else {
    toolsHtml += `
    <div class="skills-icon">
      <i class="devicon devicon-${tool.toLowerCase()}-plain" aria-hidden="true"></i>
      <p class="text-muted">${tool}</p>
    </div>`;
  }
})


document.getElementById("tools").innerHTML = toolsHtml;