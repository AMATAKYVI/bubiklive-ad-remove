(function () {
  const removeElement = () => {
    const element = document.querySelector('.box-player-popup-restriction');
    if (element) {
      element.remove();
      console.log('Popup removed');
    }
  };
  removeElement();
  const observer = new MutationObserver(removeElement);
  observer.observe(document.body, { childList: true, subtree: true });
})();
