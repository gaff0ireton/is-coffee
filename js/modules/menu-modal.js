// モーダルの骨組み：価格・写真などは担当者が後から更新できる
export function initMenuModal() {
  const dialog = document.querySelector('[data-menu-dialog]');
  if (!dialog) return;
  const panels = [...dialog.querySelectorAll('[data-menu-panel]')];
  document.querySelectorAll('[data-menu-open]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.dataset.menuOpen;
      panels.forEach((panel) => { panel.hidden = panel.dataset.menuPanel !== id; });
      dialog.showModal();
    });
  });
  dialog.querySelector('[data-menu-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
}
