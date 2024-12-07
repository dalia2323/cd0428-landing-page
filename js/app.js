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
const navbarList = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const scrollTopBtn = document.createElement('button');
let isScrolling;
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function hideNavbar() {
    let isScrolling;
    // Ensure navbar is initially invisible
    navbarList.style.display = "block";
    window.addEventListener('scroll', () => {
        // Show the navbar when scrolling
        navbarList.style.display = "block";

        // Clear the timeout if still scrolling
        clearTimeout(isScrolling);

        // Set a timeout to hide the navbar after 2 seconds of no scrolling
        isScrolling = setTimeout(() => {
            navbarList.style.display = "none";
            // Adjust this value based on the navbar height
        }, 2000);
    });
}
// Dynamically Create Scroll-to-Top Button
function createScrollTopButton() {
    scrollTopBtn.setAttribute("style", `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 10px 15px;
        background: #333;
        color: #fff;
        border: none;
        border-radius: 5rem;
        cursor: pointer;
        display: none;
        z-index: 1000;
    `);
    scrollTopBtn.id = 'scrollTopBtn';
    scrollTopBtn.textContent = '↑';
    document.body.appendChild(scrollTopBtn);
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
// Make Sections Collapsible
function makeSectionsCollapsible() {
    sections.forEach((section) => {
        const button = document.createElement('button');
        button.setAttribute("style", `
            display: block;
            margin: 10px auto;
            padding: 5px 10px;
            cursor: pointer;
            background: #333;
            color: #fff;
            border: none;
            border-radius: 5px;
        `);
        button.textContent = 'Collapse';
        const content = section.querySelector('.landing__container');
        button.addEventListener('click', () => {
            if (content.style.display === 'none') {
                content.style.display = 'block';
                button.textContent = 'Collapse';
            } else {
                content.style.display = 'none';
                button.textContent = 'Expand';
            }
        });

        section.insertBefore(button, content);
    });
}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
function createSection(sectionId, sectionTitle, para1Text, para2Text) {
    const section = document.createElement('section');
    section.id = sectionId;
    section.setAttribute("data-nav", sectionTitle);

    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('landing__container');  // Keeping the same class

    const sectionHeading = document.createElement('h2');
    sectionHeading.textContent = sectionTitle;

    const sectionPara1 = document.createElement('p');
    sectionPara1.textContent = para1Text;

    const sectionPara2 = document.createElement('p');
    sectionPara2.textContent = para2Text;

    sectionDiv.appendChild(sectionHeading);
    sectionDiv.appendChild(sectionPara1);
    sectionDiv.appendChild(sectionPara2);

    section.appendChild(sectionDiv);

    const main = document.querySelector('main');
    main.appendChild(section);
}
createSection(
    "section4",
    "Section 4",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.",
    "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non."
);
// build the nav
function buildNav(n) {
    for (let i = 1; i <= n; i++) {
        // creating a new list item for each section
        const newListItem = document.createElement('li');
        // adding a class to the new list item
        newListItem.classList.add('menu__item');
        // adding an anchor tag to the new list item
        const newAnchor = document.createElement('a');
        newAnchor.classList.add('menu__link');
        // adding the text to the anchor tag
        newAnchor.textContent = `Section${i}`;
        // adding the href to the anchor tag
        newAnchor.href = `#section${i}`;
        newListItem.appendChild(newAnchor);
        // appending the new list item to the navbar list
        navbarList.appendChild(newListItem);
    }
}
buildNav(4);

document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });

    });
});
// 

/**
 * Main Functions
 */
// Add Active Class to Section in Viewport
function setActiveSection() {
    const threshold = window.innerHeight / 2;

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const navLink = document.querySelector(`a[href="#${section.id}"]`);

        if (rect.top <= threshold && rect.bottom >= threshold) {
            section.classList.add('your-active-class');
            navLink.classList.add('your-active-class');
        } else {
            section.classList.remove('your-active-class');
            navLink.classList.remove('your-active-class');
        }
    });
}

// Show Scroll-to-Top Button
function toggleScrollTopButton() {
    if (window.scrollY > window.innerHeight) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
}
/**
 * Events
 */
// Add Scroll-to-Top Button
createScrollTopButton();
// Make Sections Collapsible
makeSectionsCollapsible();
// Highlight Section on Scroll
window.addEventListener('scroll', () => {
    setActiveSection();
    toggleScrollTopButton();
});
// Hide Navbar While Not Scrolling
hideNavbar();





