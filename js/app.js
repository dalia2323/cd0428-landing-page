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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
// holding the navbarList by its id 
const navbarList=document.querySelector('#navbar__list');
// holding the sections by their class
const main=document.querySelector('main');
const sections = document.querySelectorAll('section');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//create section4
const section4=document.createElement('section');
section4.id="section4";
section4.setAttribute("data-nav","Section 4");
const section4Div=document.createElement('div');
section4Div.classList.add('landing__container');
const section4Heading=document.createElement('h2');
section4Heading.textContent='Section 4';
const section4Para1=document.createElement('p');
section4Para1.textContent='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
const section4Para2=document.createElement('p');
section4Para2.textContent='Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
section4Div.appendChild(section4Heading);
section4Div.appendChild(section4Para1);
section4Div.appendChild(section4Para2);
section4.appendChild(section4Div);
main.appendChild(section4);
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// build the nav
// create sections list in navbar
for(let i=1;i<=4;i++){
    // creating a new list item for each section
    const newListItem=document.createElement('li');
    // adding a class to the new list item
    newListItem.classList.add('menu__item');
    // adding an anchor tag to the new list item
    const newAnchor=document.createElement('a');
    newAnchor.classList.add('menu__link');
    // adding the text to the anchor tag
    newAnchor.textContent=`Section${i}`;
    // adding the href to the anchor tag
    newAnchor.href=`#section${i}`;
    newListItem.appendChild(newAnchor);
    // appending the new list item to the navbar list
    navbarList.appendChild(newListItem);
}

// Add class 'active' to section when near top of viewport
function makeActive() {
     // Set the value to half of the viewport height
    const VALUE = window.innerHeight / 2;
    sections.forEach((section) => {
        // Get the section's position relative to the viewport
        const box = section.getBoundingClientRect(); 
        // Find the corresponding nav link
        const navLink = document.querySelector(`a[href="#${section.id}"]`); 
        if (box.top <= VALUE && box.bottom >= VALUE) {
            // Add the 'your-active-class' to the section and its corresponding nav link
            section.classList.add('your-active-class');
            navLink.classList.add('your-active-class');
        } else {
            // Remove the 'your-active-class' from sections and nav links that are not in the viewport
            section.classList.remove('your-active-class');
            navLink.classList.remove('your-active-class');
        }
    });
}
// Scroll to anchor ID using scrollTO event
document.querySelectorAll('.menu__link').forEach(link=>{
    link.addEventListener('click',e=>{
        e.preventDefault();
        const targetId=link.getAttribute('href').slice(1);
        const targetElement=document.getElementById(targetId);
        targetElement.scrollIntoView({behavior:'smooth'});

    });
});

/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('scroll', makeActive);

// Build menu 

// Scroll to section on link click

