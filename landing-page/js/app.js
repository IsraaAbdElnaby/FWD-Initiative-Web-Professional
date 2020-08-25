/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll('section');
const list = document.querySelector('#navbar__list');
const collapse = document.querySelectorAll('.collapsible');
console.log(collapse);
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


//tests whether an element is in viewport or not
const inViewPort = (element) => {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 && bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

const callback = (section) => {
    window.scrollTo(section.getBoundingClientRect().x, section.getBoundingClientRect().y);
}
//console.log(inViewPort(sections[0]));

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const observer = new IntersectionObserver((entries) => {
    console.log(entries);
    entries.forEach(entry => {

        if (entry.intersectionRatio > 0) {
            entry.target.classList.add("landing__container");
        }
        else entry.target.classList.remove("your-active-class");
        console.log(entry.className);


    })
}
    , { threshold: 1 });

sections.forEach(
    (section) => {
        //  console.log(section);
        observer.observe(section);
    }
)


const menu = () => {
    sections.forEach(
        (currentValue) => {
            let data = currentValue.getAttribute('data-nav');
            list.innerHTML +=
                "<li><a class = \"menu__link\" href = " + "#" + currentValue.id + ">" + data + "</a>";
        }
    )
}
//menu();

//const val = document.querySelectorAll('.menu__link');
//const v = val[1];
// v.addEventListener('click', function () {
//     console.log(v.id);
//    });
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

//Build navigation when DOM content is fully loaded
window.addEventListener("DOMContentLoaded", menu);

list.addEventListener('click', (event) => {
    event.preventDefault();
    //console.log(event.target);
    sections.forEach(section => {
        if (("#" + section.id) === event.target.hash) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    })
    //window.setInterval(callback(event.target));

    //
})

collapse.forEach((item) => {
    item.addEventListener('click', () => {
        //console.log(this);
        item.classList.toggle("visible");
        const sib = item.nextElementSibling;
        if (sib.style.display === "none")
            sib.style.display = "block";
        else
            sib.style.display = "none";

    })
})

// Build menu 

// Scroll to section on link click

// Set sections as active

