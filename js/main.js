import { navigation } from "./modules/navigation.js";
import { initSlider } from "./modules/slider.js";
import { initMenuModal } from "./modules/menu-modal.js";

navigation();
initSlider();
initMenuModal();

const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1,
    anchors: true,
});