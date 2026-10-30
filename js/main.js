import { navigation } from "./modules/navigation.js";
import { initSlider } from "./modules/slider.js";
import { initMenuModal } from "./modules/menu-modal.js";
import { loading } from "./modules/load.js";
import { shop } from "./modules/shop.js";

navigation();
initSlider();
initMenuModal();
loading();
shop();

const lenis = new Lenis({
    autoRaf: true,
    lerp: 0.1,
    anchors: true,
});

const dialog = document.querySelector(".gift-modal");
const scrollEnd = document.querySelector(".footer");
const reopenButton = document.querySelector(".gift-modal-reopen");

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

dialog.addEventListener("close", () => {
    reopenButton.hidden = false;
});

// 再表示ボタンをクリックしたらモーダルを開く
reopenButton.addEventListener("click", () => {
    reopenButton.hidden = true;
    dialog.showModal();
});

// ブラウザによるスクロール位置の復元を無効にする
history.scrollRestoration = 'manual';

// ページ表示時に先頭へ戻す
window.addEventListener('pageshow', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
    });
});