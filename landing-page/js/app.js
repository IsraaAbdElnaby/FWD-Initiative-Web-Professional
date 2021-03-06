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
const links  = document.getElementsByClassName('menu__link');
const scrollBtn = document.querySelector('.scrollupbtn');
const navBar = document.querySelector('.navbar__menu');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const btnVisible = () => {
    if (window.pageYOffset > 20 || document.documentElement.scrollTop > 20|| document.body.scrollTop > 20){
       scrollBtn.style.display = "block";
       console.log("visible");
    }
    else scrollBtn.style.display = "none";
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/



// const observer = new IntersectionObserver((entries) => {
//     //console.log(entries);
//     entries.forEach(entry => {
//         let index = parseInt(entry.target.id.substring(7)) - 1;
//         if (entry.intersectionRatio > 0) {
//             links[index].classList.add("active");
//         }
//         else links[index].className = links[index].classList.replace("/\bactive\b/g", "");
        
//         console.log(entry.target.id );
//         console.log(index);
//         //console.log(entry.target.className);
       

//     })
// }
//     , { threshold: 1 });

// sections.forEach(
//     (section) => {
//         observer.observe(section);
//     }
// )



// build the nav
const menu = () => {
    sections.forEach(
        (currentValue) => {
            let data = currentValue.getAttribute('data-nav');
            list.innerHTML +=
                "<li><a class = \"menu__link\" href = " + "#" + currentValue.id + ">" + data + "</a>";
        }
    )
}


//tests whether an element is in viewport or not
const inViewPort = (element) => {
    let bounding = element.getBoundingClientRect();
    return (
        bounding.top >= 0 && bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add class 'active' to section when near top of viewport
function setStyle (section) {
    //calculate index of nav link 
    let index = parseInt(section.id.substring(7)) - 1; 
    
    if(inViewPort(section))
       links[index].classList.add("active");
    else
       links[index].classList.remove("active");

}

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/


//Build menu when DOM content is fully loaded
window.addEventListener("DOMContentLoaded", menu);


// Scroll to section on link click
list.addEventListener('click', (event) => {
    event.preventDefault(); //prevent default behaviour of scrolling to section directly by id

    sections.forEach(section => {
        if (("#" + section.id) === event.target.hash) {
            section.scrollIntoView({
                behavior: "smooth"
            });
        }
    })

})

//event for collapsible items to ensure its functionality
collapse.forEach((item) => {
    item.addEventListener('click', () => {
        const sib = item.nextElementSibling;
        if (sib.style.display === "none") {
            sib.style.display = "block";
            item.classList.add("visible");
        }
        else {
            sib.style.display = "none";
            item.classList.remove("visible");
        }

    })
})

// Set sections as active
//change navbar link when section is currently in view
let prevScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop ;
window.addEventListener("scroll", () => {
    btnVisible(); //change visibility of scroll up button

    //Hide navbar while scrolling down
    let curScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
    if(curScrollTop > prevScrollTop) 
        navBar.style.display = "none";
    else
        navBar.style.display = "block";
    sections.forEach (section => {
        setStyle(section);
    })

    prevScrollTop = curScrollTop;
})

//Scroll to top
scrollBtn.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
})




