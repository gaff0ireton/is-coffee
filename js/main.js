import { navigation } from "./modules/navigation.js";
import { initSlider } from "./modules/slider.js";
import { initMenuModal } from "./modules/menu-modal.js";
import { loading } from "./modules/load.js";

navigation();
initSlider();
initMenuModal();
loading();

const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1,
    anchors: true,
});

const dialog = document.querySelector(".gift-modal");
const scrollEnd = document.querySelector(".footer");

const isSP = window.matchMedia("(max-width: 767px)");
let isShown = false;

const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) return;
    if (!isSP.matches || isShown) return;

    isShown = true;

    dialog.showModal();
    observer.disconnect();
});

observer.observe(scrollEnd);