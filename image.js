document.getElementById('toggleOptions').addEventListener('click', function() {
    // Get all the option elements
    var options = document.getElementsByClassName('option');

    // Loop through the option elements and toggle the .hidden class
    for (var i = 0; i < options.length; i++) {
        options[i].classList.toggle('hidden');
    }
});

fetch('https://pixabay.com/api/?key=42080867-039d5b144c63ec32d11cde8a4&orientation=all&category=all&per_page=200&image_type=all&editors_choice=true')
    .then(response => response.json())
    .then(data => {
        var randomIndex = Math.floor(Math.random() * data.hits.length);
        var img = document.createElement('img');
        img.src = data.hits[randomIndex].largeImageURL; // Access the image URL
        img.onload = function() {
            if (this.naturalHeight - 150 > window.innerHeight) {
                img.style.marginTop = '60px';
                img.style.width = '27%';  
                img.style.height = '27%';
            } else {
                img.style.marginTop = '60px';
                img.style.width = '65%';  
                img.style.height = '65%';
            }
        }
        document.body.appendChild(img);
        spinner.style.display = 'none'; // Hide the spinner
    });

// Get the reset time from localStorage
var resetTime = localStorage.getItem('resetTime') ? new Date(localStorage.getItem('resetTime')) : new Date();

// If the reset time is in the past, reset the counter and set a new reset time
if (new Date() >= resetTime) {
    var counter = 100;
    resetTime = new Date(new Date().getTime() + 60000); // 60000 milliseconds = 1 minute
    localStorage.setItem('resetTime', resetTime.toString());
} else {
    // If the reset time is in the future, initialize the counter from localStorage
    var counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 100;
}

// Decrease the counter
counter = counter - 1;

// Save the counter to localStorage
localStorage.setItem('counter', counter);

// Update the counter display
document.getElementById('counter').textContent = counter + ' / 100 p/min';

// Set a timeout to reset the counter when the reset time arrives
setTimeout(function() {
    counter = 100;
    // Save the counter to localStorage
    localStorage.setItem('counter', counter);
    // Update the counter display
    document.getElementById('counter').textContent = counter + ' / 100 p/min';
}, resetTime - new Date());

// Save the counter to localStorage whenever the user leaves the page
window.onbeforeunload = function() {
    localStorage.setItem('counter', counter);
};

// Rest of your code...

document.getElementById('new-image-button').addEventListener('click', function() {
    // Decrease the counter
    counter = counter - 1;
    // Save the counter to localStorage
    localStorage.setItem('counter', counter);
    // Update the counter display
    document.getElementById('counter').textContent = counter + ' / 100 p/min';

    // Rest of the fetch code...
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Show the spinner
    fetch('https://pixabay.com/api/?key=42080867-039d5b144c63ec32d11cde8a4&orientation=all&category=all&per_page=150&image_type=all&editors_choice=true')
        .then(response => response.json())
        .then(data => {
            var randomIndex = Math.floor(Math.random() * data.hits.length);
            var img = document.createElement('img');
            img.src = data.hits[randomIndex].largeImageURL; // Access the image URL
            img.onload = function() {
                if (this.naturalHeight - 150 > window.innerHeight) {
                    img.style.marginTop = '60px';
                    img.style.width = '27%';  
                    img.style.height = '27%';
                } else {
                    img.style.marginTop = '60px';
                    img.style.width = '65%';  
                    img.style.height = '65%';
                }
            }
            // Remove the old image before appending the new one
            var oldImg = document.querySelector('img');
            if (oldImg) {
                document.body.removeChild(oldImg);
            }
            document.body.appendChild(img);
            spinner.style.display = 'none'; // Hide the spinner
        });
});

// Save the counter to localStorage whenever the user leaves the page
window.onbeforeunload = function() {
    localStorage.setItem('counter', counter);
};



//unsplash
function fetchImage() {
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Show the spinner

    fetch('https://api.unsplash.com/photos/random?client_id=Rt8SVl8L5dyxu6WiqO9WheI7REswbJdKjD403fpMsgc')
        .then(response => {
            var remainingRequests = response.headers.get('X-Ratelimit-Remaining');
            document.getElementById('remainingRequests').textContent = remainingRequests + ' / 50 p/hour';

            return response.json();
        })
        .then(data => {
            var img = document.createElement('img');
            img.src = data.urls.regular; // Access the image URL

            // Remove all old images before appending the new one
            var oldImgs = document.querySelectorAll('img');
            oldImgs.forEach(function(oldImg) {
                oldImg.parentNode.removeChild(oldImg);
            });

            img.onload = function() {
                if (this.naturalHeight - 150 > window.innerHeight) {
                    img.style.marginTop = '60px';
                    img.style.width = '27%';  
                    img.style.height = '27%';
                } else {
                    img.style.marginTop = '60px';
                    img.style.width = '65%';  
                    img.style.height = '65%';
                }
            }
            document.body.appendChild(img);
            spinner.style.display = 'none'; // Hide the spinner
        });
}

document.getElementById('generateImage').addEventListener('click', fetchImage);


//pixabay not ed choice
document.getElementById('new-image-button2').addEventListener('click', function() {
    // Decrease the counter
    counter = counter - 1;
    // Save the counter to localStorage
    localStorage.setItem('counter', counter);
    // Update the counter display
    document.getElementById('counter').textContent = counter + ' / 100 p/min';

    // Rest of the fetch code...
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Show the spinner
    fetch('https://pixabay.com/api/?key=42080867-039d5b144c63ec32d11cde8a4&orientation=all&category=all&per_page=150&image_type=all&editors_choice=false')
        .then(response => response.json())
        .then(data => {
            var randomIndex = Math.floor(Math.random() * data.hits.length);
            var img = document.createElement('img');
            img.src = data.hits[randomIndex].largeImageURL; // Access the image URL
            img.onload = function() {
                if (this.naturalHeight - 150 > window.innerHeight) {
                    img.style.marginTop = '60px';
                    img.style.width = '27%';  
                    img.style.height = '27%';
                } else {
                    img.style.marginTop = '60px';
                    img.style.width = '65%';  
                    img.style.height = '65%';
                }
            }
            // Remove the old image before appending the new one
            var oldImg = document.querySelector('img');
            if (oldImg) {
                document.body.removeChild(oldImg);
            }
            document.body.appendChild(img);
            spinner.style.display = 'none'; // Hide the spinner
        });
});