const humburgerButton = document.getElementById("Humburger");
const mobileMenu = document.getElementById("mobileMenu");
const humburgerIcon = document.getElementById("iconHumburger");
const closeIcon = document.getElementById("iconClose");

let isOpen = false;

humburgerButton.addEventListener("click", () => {
    isOpen = !isOpen;

    if(isOpen) {
        mobileMenu.classList.remove("translate-x-full");
        mobileMenu.classList.add("translate-x-0");

        humburgerIcon.classList.add("hidden");
        closeIcon.classList.remove("hidden");

        document.body.style.overflow = "hidden";
    } else {
        mobileMenu.classList.remove("translate-x-0");
        mobileMenu.classList.add("translate-x-full");

        humburgerIcon.classList.remove("hidden");
        closeIcon.classList.add("hidden");
        document.body.style.overflow = "";
    }
});