// Function to toggle image size
function enlargeImage(imageId) {
    var image = document.getElementById(imageId);
    if (image.style.width === "150px") {
        image.style.width = "300px"; // Enlarged size
    } else {
        image.style.width = "150px"; // Default size
    }
}

// Function to prompt for the user's name and display it
function askName() {
    var name = prompt("Please enter your name:");
    if (name) {
        var displayElement = document.createElement('p');
        displayElement.textContent = "Hello, " + name + "! Welcome to my portfolio.";
        displayElement.style.color = "#ffffff"; // Set color for better contrast
        displayElement.style.marginTop = "10px";

        var containerDiv = document.querySelector('.profile-container');
        // Ensure only one welcome message is displayed at a time
        var existingMessage = containerDiv.querySelector('p');
        if (existingMessage) {
            containerDiv.removeChild(existingMessage);
        }
        containerDiv.appendChild(displayElement);
    }
}

// Function to add hover effect on nav items
function addHoverEffect(element) {
    element.style.backgroundColor = 'lightblue';
}

// Function to remove hover effect on nav items
function removeHoverEffect(element) {
    element.style.backgroundColor = '';
}

// Function to create a dropdown menu for nav items
function createDropdown(menuName, items) {
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

// Initialize the main elements after the page loads
window.onload = function() {
    // Set up the profile image with clickable resize functionality
    var profileImage = document.getElementById('profileImage');
    profileImage.style.width = "150px"; // Set initial size
    profileImage.onclick = function() {
        enlargeImage('profileImage');
    };

    // Create the "Enter Your Name" button and attach the askName function
    var nameButton = document.createElement('button');
    nameButton.textContent = 'Enter Your Name';
    nameButton.onclick = askName;
    nameButton.style.marginTop = "10px";

    var containerDiv = document.querySelector('.profile-container');
    containerDiv.appendChild(nameButton);

    // Set up the navigation menu with hover and dropdowns
    var navMenu = document.createElement('nav');
    var navList = document.createElement('ul');
    
    // Main nav items
    var navItems = [
        { name: 'About', link: '#about' },
        { name: 'Education', link: '#education' },
        { name: 'Experience', link: '#experience' },
        { name: 'Skills', link: '#skills' },
        { name: 'Projects', link: '#projects' },
        { name: 'Contact', link: '#contact' }
    ];

    // Add each nav item to the nav list
    navItems.forEach(function(navItem) {
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = navItem.link;
        link.textContent = navItem.name;
        
        // Attach hover effects
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

    // Dropdown menu items for "Certificates"
    var certificateMenuItems = [
        { text: 'Excel' },
        { text: 'SQL' },
        { text: 'Python' }
    ];

    // Add dropdowns to the nav list
    navList.appendChild(createDropdown('Extra', extraMenuItems));
    navList.appendChild(createDropdown('Certificates', certificateMenuItems));

    // Append the nav list to the nav menu and add it to the document body
    navMenu.appendChild(navList);
    document.body.insertBefore(navMenu, document.body.firstChild);
};
