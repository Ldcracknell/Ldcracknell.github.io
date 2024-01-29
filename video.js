document.getElementById('toggleOptions').addEventListener('click', function() {
    // Get all the option elements
    var options = document.getElementsByClassName('option');

    // Loop through the option elements and toggle the .hidden class
    for (var i = 0; i < options.length; i++) {
        options[i].classList.toggle('hidden');
    }
});


var spinner = document.getElementById('spinner');
spinner.style.display = 'block'; // Show the spinner
fetch('https://pixabay.com/api/videos/?key=42080867-039d5b144c63ec32d11cde8a4&orientation=all&category=all&per_page=150&editors_choice=true')
    .then(response => response.json())
    .then(data => {
        var randomIndex = Math.floor(Math.random() * data.hits.length);
        var video = document.createElement('video');
        video.src = data.hits[randomIndex].videos.large.url; // Access the video URL
        video.controls = true; // Add video controls
        video.width = 1280; // Set the width
        video.height = 960; // Set the height
        video.style.position = 'absolute'; // Position the video
        video.style.top = '-40px'; 
        video.muted = true;
        video.loop = true;
        

        // Remove the old video before appending the new one
        var oldVideo = document.querySelector('video');
        if (oldVideo) {
            document.body.removeChild(oldVideo);
        }
        document.body.appendChild(video);
        spinner.style.display = 'none'; // Hide the spinner
        video.play();
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

document.getElementById('new-video-button').addEventListener('click', function() {
    // Decrease the counter
    counter = counter - 1;
    // Save the counter to localStorage
    localStorage.setItem('counter', counter);
    // Update the counter display
    document.getElementById('counter').textContent = counter + ' / 100 p/min';

    // Rest of the fetch code...
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Show the spinner
    fetch('https://pixabay.com/api/videos/?key=42080867-039d5b144c63ec32d11cde8a4&orientation=all&category=all&per_page=150&editors_choice=true')
        .then(response => response.json())
        .then(data => {
            var randomIndex = Math.floor(Math.random() * data.hits.length);
            var video = document.createElement('video');
            video.src = data.hits[randomIndex].videos.large.url; // Access the video URL
            video.controls = true; // Add video controls
            video.width = 1280; // Set the width
        video.height = 960; // Set the height
        video.style.position = 'absolute'; // Position the video
        video.style.top = '-40px';  
        video.loop = true;



            // Remove the old video before appending the new one
            var oldVideo = document.querySelector('video');
            if (oldVideo) {
                document.body.removeChild(oldVideo);
            }
            document.body.appendChild(video);
            spinner.style.display = 'none'; // Hide the spinner
            video.play();
        });
});

// Save the counter to localStorage whenever the user leaves the page
window.onbeforeunload = function() {
    localStorage.setItem('counter', counter);
};



//pixabay not ed choice
document.getElementById('new-video-button2').addEventListener('click', function() {
    // Decrease the counter
    counter = counter - 1;
    // Save the counter to localStorage
    localStorage.setItem('counter', counter);
    // Update the counter display
    document.getElementById('counter').textContent = counter + ' / 100 p/min';

    // Rest of the fetch code...
    var spinner = document.getElementById('spinner');
    spinner.style.display = 'block'; // Show the spinner
    fetch('https://pixabay.com/api/videos/?key=42080867-039d5b144c63ec32d11cde8a4&orientation=all&category=all&per_page=150&editors_choice=false')
        .then(response => response.json())
        .then(data => {
            var randomIndex = Math.floor(Math.random() * data.hits.length);
            var video = document.createElement('video');
            video.src = data.hits[randomIndex].videos.large.url; // Access the video URL
            video.controls = true; // Add video controls
            video.width = 1280; // Set the width
        video.height = 960; // Set the height
        video.style.position = 'absolute'; // Position the video
        video.style.top = '-40px';  
        video.loop = true;
 

            // Remove the old video before appending the new one
            var oldVideo = document.querySelector('video');
            if (oldVideo) {
                document.body.removeChild(oldVideo);
            }
            document.body.appendChild(video);
            spinner.style.display = 'none'; // Hide the spinner
            video.play();
        });

 
});