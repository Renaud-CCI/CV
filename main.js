//------INTRO---------

let navbar = document.querySelector('.navbar');
let clouds = document.querySelectorAll('.cloud');
let sky = document.querySelector('.sky');
let siteBody = document.querySelector('#siteBody');

window.addEventListener('load', () => {

    setTimeout(() => {
      navbar.style.display = 'block'
    }, "3700");

    clouds.forEach(function(cloud){
      setTimeout(() => {
      cloud.style.display = 'none'
      }, "4000");
    });

    setTimeout(() => {
      sky.style.display = 'none'
    }, "4000");
    setTimeout(() => {
      siteBody.style.display = 'block'
    }, "4000");
    
});


//--------SKILLS--------------

let skillsInputs = document.querySelectorAll('.skillsInput');
let sendMail = document.querySelector('#sendMail');

skillsInputs.forEach(function(skillsInput){
  let defaultValue = skillsInput.value;
  skillsInput.addEventListener('click', function(){
    let isMail = confirm(`
Bien vu!
Mais le meilleur moyen de faire grimper ces rangebars est de me confier un thème de stage à vos cotés.. ;)
Souhaitez-vous m'envoyer un mail?
    `);
    skillsInput.value = defaultValue;
    isMail? sendMail.click(): false;
  })
})


//---------------------CV-----------------

let legoDivs = document.querySelectorAll('.lego');
let legoCont = document.querySelector('.legoCont');
let cursor = document.querySelector('.cursor');

legoCont.addEventListener('mouseover', function(){
  legoDivs.forEach(function(legoDiv){
    legoDiv.classList.add('legoAnim');
  })
  cursor.classList.add('deleted-cursor');
})
