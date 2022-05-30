function toggleMenu () {
 
    let slider = document.querySelector('.slider');
    let menuToggle = document.querySelector('.menu-toggle');
    let main = document.querySelector('.main')
    let footer = document.querySelector('.footer')
    let menuToggleDisplayStatus = window.getComputedStyle(menuToggle).getPropertyValue('display');


    if (menuToggleDisplayStatus === "none")  {
        main.style.display = "none";
        footer.style.display = "none";
        slider.style.display = "none";
        menuToggle.style.display = "block";

    } else {
        slider.style.display = "block";
        main.style.display = "block";
        footer.style.display = "block";
        menuToggle.style.display = "none";
    }
}