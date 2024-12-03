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
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


