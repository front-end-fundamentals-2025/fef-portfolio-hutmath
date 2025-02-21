// Toggle Dark Mode
const toggleThemeButtonElement = document.getElementById("toggle-theme-button");

function toggleDarkMode () {
    // let toggleBodyTheme = document.body;
    // toggleBodyTheme.classList.toggle("dark-mode-body");
    // let toggleNavbarTheme = document.querySelector("nav");
    // toggleNavbarTheme.classList.toggle("dark-mode-navbar");

    document.body.classList.toggle("dark-mode-body");
    document.querySelector("header").classList.toggle("dark-mode-header");
}

toggleThemeButtonElement.addEventListener("click", function (event) {
    toggleDarkMode();
});


// Just stupid things
// const mainCssDocument = document.getElementById("main-css-file")

// function toggleMainCss () {
//     let mainCssDocument = document.getElementById("main-css-file");
//     document.getElementById("main-css-file")
// }