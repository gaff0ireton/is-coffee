const btn = document.querySelector('.header__btn');
const nav = document.querySelector('.header__nav');

export function navigation() {
  if (!btn || !nav) return;

  const setOpen = (open) => {
    btn.classList.toggle('is-click', open);
    nav.classList.toggle('is-click', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
    nav.inert = !open;
  };

  btn.addEventListener('click', () => setOpen(btn.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setOpen(false);
  });
}
