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

// Adding hover effects on nav items
function addHoverEffect(element) {
    element.style.backgroundColor = 'lightblue';
}

function removeHoverEffect(element) {
    element.style.backgroundColor = '';
}

// Create dropdown menu
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

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();

    // Collect form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    const contactMethod = document.querySelector('input[name="contactMethod"]:checked')?.value;
    const interests = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
                          .map(interest => interest.value);
    const contactDate = document.getElementById("contactDate").value; // Updated to "contactDate"
    
    // Store data in local storage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("message", message);
    localStorage.setItem("contactMethod", contactMethod);
    localStorage.setItem("interests", JSON.stringify(interests));
    localStorage.setItem("contactDate", contactDate); // Updated to "contactDate"

    alert("Your information has been saved!");
}

// Clear local storage on form reset
function handleFormReset() {
    localStorage.clear();
    alert("Form data has been cleared!");
}

// Initialize elements after page load
window.onload = function() {
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

    var extraMenuItems = [
        { text: 'Languages Spoken', link: 'languages.html' },
        { text: 'Work Experience', link: 'work.html' },
        { text: 'Volunteer Work' }
    ];

    var certificateMenuItems = [
        { text: 'Excel' },
        { text: 'SQL' },
        { text: 'Python' }
    ];

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

    // Attach form event listeners
    const form = document.getElementById("userForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
        form.addEventListener("reset", handleFormReset);
    }
};
