const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

// sign_up_btn.addEventListener("click", () => {
//     toggleLoadingScreen();
//     setTimeout(() => {
//         container.classList.add("sign-up-mode");
//         toggleLoadingScreen();
//     }, 400);
// });

// sign_in_btn.addEventListener("click", () => {
//     toggleLoadingScreen();
//     setTimeout(() => {
//         container.classList.remove("sign-up-mode");
//         toggleLoadingScreen();
//     }, 400);
// });

// function toggleLoadingScreen() {
//     const loadingScreen = document.getElementById('loading-screen');
//     loadingScreen.style.display = (loadingScreen.style.display === 'none' || loadingScreen.style.display === '') ? 'flex' : 'none';
// }

function showLoaderAndRedirect(url) {
    // Show the loader
    document.getElementById('loader').style.display = 'block';

    // Simulate a delay to show the loading animation
    setTimeout(function() {
        window.location.href = url;
    }, 2000); // 2 seconds delay
}


