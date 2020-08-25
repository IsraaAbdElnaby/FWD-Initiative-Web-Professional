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
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


 //tests whether an element is in viewport or not
 const inViewPort = (element) => {
     let bounding = element.getBoundingClientRect();
     return (
         bounding.top >= 0 && bounding.left >=0 &&
         bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
         bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
     );
 }

//console.log(inViewPort(sections[0]));

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const menu = () => {
    sections.forEach (
        (currentValue) => {
            let data = currentValue.getAttribute('data-nav');
            list.innerHTML += 
                 "<li><a class = \"menu__link\" href = " + "#" + currentValue.id + ">" + data + "</a>" ;
        }
    )
}
menu();

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

list.addEventListener('click', (event) => {
    event.target.scrollTo({
        behavior: "smooth"
    });
})

// Build menu 

// Scroll to section on link click

// Set sections as active

