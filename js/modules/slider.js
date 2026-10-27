// CDNの読み込みに失敗しても、ナビや他のJSが動くよう動的importにする
export async function initSlider() {
  const el = document.querySelector('.fv.swiper');
  if (!el) return;
  try {
    const { default: Swiper } = await import('https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    return new Swiper(el, {
      loop: true,
      speed: reduceMotion ? 0 : 2000,
      effect: 'fade',
      autoplay: reduceMotion ? false : { delay: 3500, disableOnInteraction: false },
      slidesPerView: 1,
    });
  } catch (error) {
    console.warn('Swiperを読み込めませんでした。先頭画像を表示します。', error);
  }
}
