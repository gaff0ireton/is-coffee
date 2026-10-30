window.addEventListener('load', loading);
const load = document.querySelector('.load');
const load_anime = document.querySelector('.frame');
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('no-scroll');
});

export function loading() {
    document.body.classList.add('no-scroll');
    setTimeout(function () {
        load_anime.classList.add('no-active');

        document.body.style.overflow = '';
    }, 5500);

    setTimeout(function () {
        load.classList.add('no-active');


        // document.body.style.overflow = '';
    }, 6000);

    setTimeout(function () {
        document.documentElement.classList.remove('no-scroll');
        document.body.classList.remove('no-scroll');

    }, 7000);

}