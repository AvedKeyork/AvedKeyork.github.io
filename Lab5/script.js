
// Function for the name and display being on the page
function askName() {
    var name = prompt("Please enter your name:");
    if (name) {
        var displayElement = document.createElement('p');
        displayElement.textContent = "Hello, " + name + "! Welcome to my portfolio.";
        
        
        var containerDiv = document.querySelector('div');
        containerDiv.insertAdjacentElement('afterend', displayElement);
    }
}

// To enlarge the image when clicked
function enlargeImage(imageId) {
    var image = document.getElementById(imageId);
    if (image.style.width === "200px") {
        image.style.width = "400px";
    } else {
        image.style.width = "200px";
    }
}

// adding hover effects on nav items
function addHoverEffect(element) {
    element.style.backgroundColor = 'lightblue';
}
// Create dropdown menu
function removeHoverEffect(element) {
    element.style.backgroundColor = '';
}


function createDropdown(menuName, items) {
    console.log("Creating dropdown for menu:", menuName);
    var listItem = document.createElement('li');
    listItem.className = 'dropdown';

    var menuLink = document.createElement('a');
    menuLink.href = '#';
    menuLink.textContent = menuName;
    listItem.appendChild(menuLink);

    var dropdownContent = document.createElement('ul');
    dropdownContent.className = 'dropdown-content';

    items.forEach(function(item) {
        var dropdownItem = document.createElement('li');
        var itemLink = document.createElement('a');
        itemLink.textContent = item.text;
        
        if (item.link) {
            itemLink.href = item.link;
        } else {
            itemLink.href = '#';
        }
        
        dropdownItem.appendChild(itemLink);
        dropdownContent.appendChild(dropdownItem);
    });

    listItem.appendChild(dropdownContent);
    return listItem;
}

// lets initialize all elements after the page loads
window.onload = function() {
    console.log("Initializing elements");

    var navMenu = document.createElement('nav');
    var navList = document.createElement('ul');
    
    var navItems = [
        { name: 'Courses', link: '#courses' },
        { name: 'Skills', link: '#skills' },
        { name: 'Links', link: '#links' }
    ];

    navItems.forEach(function(navItem) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = navItem.link;
        link.textContent = navItem.name;
        
        link.onmouseover = function() {
            addHoverEffect(this.parentNode);
        };
        link.onmouseout = function() {
            removeHoverEffect(this.parentNode);
        };
        
        listItem.appendChild(link);
        navList.appendChild(listItem);
    });

    // Dropdown menu items for "Extra"
    var extraMenuItems = [
        { text: 'Languages Spoken', link: 'languages.html' },
        { text: 'Work Experience', link: 'work.html' },
        { text: 'Volunteer Work' }
    ];

    // Same thing for "Certificates"
    var certificateMenuItems = [
        { text: 'Excel' },
        { text: 'SQL' },
        { text: 'Python' }
    ];

    console.log("Adding Extra and Certificates dropdowns");
    navList.appendChild(createDropdown('Extra', extraMenuItems));
    navList.appendChild(createDropdown('Certificates', certificateMenuItems));

    navMenu.appendChild(navList);
    document.body.insertBefore(navMenu, document.body.firstChild);

    var containerDiv = document.createElement('div');
    containerDiv.style.display = 'flex';
    containerDiv.style.alignItems = 'center';
    containerDiv.style.marginTop = '10px';

    var nameButton = document.createElement('button');
    nameButton.textContent = 'Enter Your Name';
    nameButton.onclick = askName;
    containerDiv.appendChild(nameButton);

    var clickableImage = document.createElement('img');
    clickableImage.id = 'profileImage';
    clickableImage.src = 'images/face.jpg';
    clickableImage.alt = 'Profile Image';
    clickableImage.style.width = '100px';
    clickableImage.style.marginLeft = '10px';
    clickableImage.onclick = function() {
        enlargeImage('profileImage');
    };
    containerDiv.appendChild(clickableImage);

    document.body.insertBefore(containerDiv, navMenu.nextSibling);
};
