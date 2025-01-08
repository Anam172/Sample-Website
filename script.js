const scrollUp = document.querySelector("#scrollUp");

scrollUp.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop ;
        let height = window.innerHeight;
        let id = sec.getAttribute('id');

        if(top >= offset -height / 2 && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
};

document.querySelector('.btn-categories').addEventListener('click', function() {
    document.getElementById('categories').scrollIntoView({ behavior: 'smooth'});
});

document.querySelector('.btn-contact').addEventListener('click', function() {
    document.getElementById('contact').scrollIntoView({ behavior: 'smooth'});
});

function openNav() {
    document.getElementById("sidenav").style.width = "350px";
}
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

function openForm(){
    document.getElementById("topSlider").style.display = "flex";
}
function closeForm(){
    document.getElementById("topSlider").style.display = "none";
}

function openPopup(){
    document.getElementById("popup").style.visibility = "visible";
}
function closePopup(){
    document.getElementById("popup").style.visibility = "hidden";
}


