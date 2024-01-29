document.getElementById('fontSelect').addEventListener('change', function() {
    document.getElementById('userInput').style.fontFamily = this.value;
});

document.getElementById('fontSizeSelect').addEventListener('change', function() {
    document.getElementById('userInput').style.fontSize = this.value;
});

document.getElementById('animationToggle').addEventListener('change', function() {
    if (this.value === 'Rainbow') {
        document.getElementById('userInput').style.animation = 'rainbow 15s linear infinite';
    } else if (this.value === 'blackGlow') {
        document.getElementById('userInput').style.animation = 'blackGlow 15s linear infinite';
    } else {
        document.getElementById('userInput').style.animation = 'none';
    }
});


document.getElementById('fontSelect').addEventListener('change', function() {
    this.style.fontFamily = this.value;
    document.getElementById('userInput').style.fontFamily = this.value;
});

window.onload = function() {
    var defaultFont = 'Minecraftia';
    document.getElementById('userInput').style.fontFamily = defaultFont;
    document.getElementById('fontSelect').style.fontFamily = defaultFont;
    document.getElementById('enterTextButton').style.fontFamily = defaultFont;
    document.getElementById('fetchQuoteButton').style.fontFamily = defaultFont;
    document.getElementById('fontSelect').value = defaultFont;
}

document.getElementById('fontSelect').addEventListener('change', function() {
    this.style.fontFamily = this.value;
    document.getElementById('userInput').style.fontFamily = this.value;
    document.getElementById('enterTextButton').style.fontFamily = this.value;
    document.getElementById('fetchQuoteButton').style.fontFamily = this.value;
});

/* ...rest of your code... */


document.getElementById('fontSelect').addEventListener('change', function() {
    this.style.fontFamily = this.value;
    document.getElementById('userInput').style.fontFamily = this.value;

    var tempElement = document.createElement('span');
    tempElement.innerHTML = this.options[this.selectedIndex].text;
    tempElement.style.fontFamily = this.value;
    document.body.appendChild(tempElement);

    var width = tempElement.getBoundingClientRect().width;
    document.body.removeChild(tempElement);

    this.style.width = width + 18 + 'px';
});


document.getElementById('fontColorSelect').addEventListener('change', function() {
    document.getElementById('userInput').style.color = this.value;
    this.style.color = this.value;
    document.getElementById('fontSelect').style.color = this.value;
    document.getElementById('enterTextButton').style.color = this.value;
    document.getElementById('fetchQuoteButton').style.color = this.value;
});

document.getElementById('enterTextButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput');
    userInput.value += 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'; // replace with the text you want to enter
    localStorage.setItem('userInput', userInput.value);
});

document.getElementById('clearButton').addEventListener('click', function() {
    var userInput = document.getElementById('userInput');
    userInput.value = ''; // replace with the text you want to enter
    localStorage.setItem('userInput', userInput.value);
});

document.getElementById('resizeButton').addEventListener('click', function() {
    var textarea = document.getElementById('userInput');
    textarea.style.width = '1250px';
    textarea.style.height = '750px';
    textarea.style.top = '50px';
});

document.getElementById('resizeButtonSqu').addEventListener('click', function() {
    var textarea = document.getElementById('userInput');
    textarea.style.width = '500px';
    textarea.style.height = '500px';
    textarea.style.top = '150px';
});

document.getElementById('boldCheckbox').addEventListener('change', function() {
    document.getElementById('userInput').style.fontWeight = this.checked ? 'bold' : 'normal';
});

document.getElementById('italicCheckbox').addEventListener('change', function() {
    document.getElementById('userInput').style.fontStyle = this.checked ? 'italic' : 'normal';
});

document.getElementById('fontColorSelect').addEventListener('change', function() {
    document.getElementById('userInput').style.color = this.value;
    document.getElementById('colorDisplay').style.backgroundColor = this.value;
});

document.getElementById('fontSizeSelect').addEventListener('change', function() {
    document.getElementById('userInput').style.fontSize = this.value;
});


// Initialize the textbox from localStorage or set it to an empty string if it doesn't exist
var userInput = document.getElementById('userInput');
userInput.value = localStorage.getItem('userInput') || '';
userInput.style.color = localStorage.getItem('fontColor') || '';
userInput.style.fontWeight = localStorage.getItem('fontWeight') || 'normal';
userInput.style.fontStyle = localStorage.getItem('fontStyle') || 'normal';
userInput.style.fontSize = localStorage.getItem('fontSize') || '20';
userInput.style.fontFamily = localStorage.getItem('fontFamily') || 'Minecraftia';

// Initialize the dropdown menus from localStorage
document.getElementById('fontColorSelect').value = localStorage.getItem('fontColor') || '';
document.getElementById('boldCheckbox').checked = localStorage.getItem('fontWeight') === 'bold';
document.getElementById('italicCheckbox').checked = localStorage.getItem('fontStyle') === 'italic';
document.getElementById('fontSizeSelect').value = localStorage.getItem('fontSize') || '20';
document.getElementById('fontSelect').value = localStorage.getItem('fontFamily') || 'Minecraftia';




// Update the text color and the color box
document.getElementById('userInput').style.color = localStorage.getItem('fontColor') || '';
document.getElementById('colorDisplay').style.backgroundColor = localStorage.getItem('fontColor') || '';
document.getElementById('fontColorSelect').style.color = localStorage.getItem('fontColor') || '';
document.getElementById('fontSelect').style.color = localStorage.getItem('fontColor') || '';
document.getElementById('enterTextButton').style.color = localStorage.getItem('fontColor') || '';
document.getElementById('fetchQuoteButton').style.color = localStorage.getItem('fontColor') || '';


userInput.addEventListener('input', function() {
    // Save the textbox value to localStorage whenever it changes
    localStorage.setItem('userInput', this.value);
});

document.getElementById('boldCheckbox').addEventListener('change', function() {
    document.getElementById('userInput').style.fontWeight = this.checked ? 'bold' : 'normal';
    localStorage.setItem('fontWeight', this.checked ? 'bold' : 'normal');
});

document.getElementById('italicCheckbox').addEventListener('change', function() {
    document.getElementById('userInput').style.fontStyle = this.checked ? 'italic' : 'normal';
    localStorage.setItem('fontStyle', this.checked ? 'italic' : 'normal');
});

document.getElementById('fontColorSelect').addEventListener('change', function() {
    document.getElementById('userInput').style.color = this.value;
    document.getElementById('colorDisplay').style.backgroundColor = this.value;
    localStorage.setItem('fontColor', this.value);
});

document.getElementById('fontSizeSelect').addEventListener('change', function() {
    document.getElementById('userInput').style.fontSize = this.value;
    localStorage.setItem('fontSize', this.value);
});

document.getElementById('fontSelect').addEventListener('change', function() {
    this.style.fontFamily = this.value;
    document.getElementById('userInput').style.fontFamily = this.value;
    document.getElementById('enterTextButton').style.fontFamily = this.value;
    localStorage.setItem('fontFamily', this.value);
});


document.getElementById('toggleOptions').addEventListener('click', function() {
    // Get all the option elements
    var options = document.getElementsByClassName('option');

    // Loop through the option elements and toggle the .hidden class
    for (var i = 0; i < options.length; i++) {
        options[i].classList.toggle('hidden');
    }
});


document.getElementById('fetchQuoteButton').addEventListener('click', function() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            var quote = data.content;
            var author = data.author;
            var userInput = document.getElementById('userInput');
            userInput.value += '"' + quote + '" - ' + author + '\n';
            localStorage.setItem('userInput', userInput.value); 
        })
        .catch(error => console.error('Error:', error));
});