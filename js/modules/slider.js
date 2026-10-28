
export async function initSlider() {
  const el = document.querySelector('.fv.swiper');
  if (!el) return;

  try {
    const { default: Swiper } = await import(
      'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'
    );

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    return new Swiper(el, {
      loop: true,
      speed: reduceMotion ? 0 : 2000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      autoplay: reduceMotion
        ? false
        : {
          delay: 6000,
          disableOnInteraction: false,
        },
      slidesPerView: 1,
    });
  } catch (error) {
    console.warn('Swiperの読み込み・初期化に失敗しました。', error);
  }
}
