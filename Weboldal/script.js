// Language Toggle Functionality
const languageToggleButton = document.getElementById("lang-toggle");
const descriptionText = document.querySelector('.description-section .readable');
const warningText = document.querySelector('.warning p');

const texts = {
    english: {
        description: "Ugráló Madár is like Flappy Bird but without all the polish. This was made using Python and Pygame in what can only be described as a fever dream.",
        warning: "USE AT YOUR OWN RISK 🤡",
        nav: {
            home: "🏠 Home-ish",
            features: "✨ Features?",
            description: "🤔 Description",
            play: "🎮 Play Now, Maybe?"
        },
        playButton: "✨ Play If You Dare!"
    },
    hungarian: {
        description: "Ugráló Madár egy Python játék, amelyet a híres Flappy Bird ihletett, és a Pygame könyvtár segítségével fejlesztették ki. A játékosoknak irányítaniuk kell egy madarat, és navigálniuk kell különféle akadályok között, miközben elkerülik az ütközéseket. Ahogy a pontszámod növekszik, a játék fokozatosan nehezebbé válik.",
        warning: "HASZNÁLD A SAJÁT FELELŐSSÉGEDRE 🤡",
        nav: {
            home: "🏠 Kezdőlap",
            features: "✨ Jellemzők?",
            description: "🤔 Leírás?",
            play: "🎮 Játssz most?"
        },
        playButton: "✨ Játssz, Ha Mered!"
    }
};

let currentLanguage = 'english';

const updateText = (language) => {
    descriptionText.textContent = texts[language].description;
    warningText.textContent = texts[language].warning;

    const navLinks = document.querySelectorAll('.pixel-nav li a');
    navLinks[0].textContent = texts[language].nav.home;
    navLinks[1].textContent = texts[language].nav.features;
    navLinks[2].textContent = texts[language].nav.description;
    navLinks[3].textContent = texts[language].nav.play;

    const playButton = document.querySelector('.play-button');
    playButton.textContent = texts[language].playButton;
};

// Initialize with default language
updateText(currentLanguage);

// Event Listener for Language Toggle
languageToggleButton.addEventListener("click", () => {
    currentLanguage = currentLanguage === 'english' ? 'hungarian' : 'english';
    updateText(currentLanguage);
    languageToggleButton.textContent = currentLanguage === 'english' ? "EN/HU??" : "HU/EN??";
});

// Play Button Functionality
const playButton = document.querySelector('.play-button');
const popupOverlay = document.getElementById('popup-overlay');

playButton.addEventListener("click", () => {
    alert('Prepare for the worst... 😬');
    popupOverlay.style.display = 'flex';

    setTimeout(() => {
        popupOverlay.style.display = 'none';
        window.location.href = "https://github.com/kriszsusu/ugralo-madar/tree/main"; 
    }, 2000);  // Delays longer for dramatic effect
});

// Hamburger Menu Functionality
const hamburgerToggle = document.getElementById('hamburger-toggle');
const navMenu = document.getElementById('nav-menu');

hamburgerToggle.addEventListener("click", () => {
    navMenu.classList.toggle('show');
});
