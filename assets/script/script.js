// NavBar action (Rotation si je click)
const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');

// Resume
const resumeList = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

// PortFolio
const portfolioList = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// Pour NavBar action (Rotation si je click)
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
        nav.classList.add('active');

        cube.style.transform = `rotateY(${idx * -90}deg)`; 

        document.querySelector('.section.active').classList.remove('active');
        sections[idx].classList.add('active');

        const array = Array.from(sections);
        const arrSecs = array.slice(1, -1); // Only requires indexex 1, 2, 3 or does not require start and end index
        arrSecs.forEach(arrSecs => {
            if(arrSecs.classList.contains('active')){
                // console.log('Ok');
                sections[4].classList.add('action-contact');
            }
        });
        if(sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact');
        }
    });
});

// Pour Resume
resumeList.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active').classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

// Pour PortFolio
portfolioList.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active');
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        portfolioBoxs[idx].classList.add('active');
    });
});

//Visibility for contact when reload
setTimeout(() =>{
    sections[4].classList.remove('active');
}, 1500);