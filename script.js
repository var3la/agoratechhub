  const cards = document.querySelectorAll('.card');

  cards.forEach((card) => {
    card.addEventListener('mouseenter', () => card.classList.add('is-active'));
    card.addEventListener('mouseleave', () => card.classList.remove('is-active'));

    card.addEventListener('click', (e) => {
      if (window.matchMedia('(hover: none)').matches) {
        cards.forEach((c) => { if (c !== card) c.classList.remove('is-active'); });
        card.classList.toggle('is-active');
      }
    });
  });


  function initViewMore(containerSelector, buttonSelector, initialCount = 3, increment = 3) {
    const container = document.querySelector(containerSelector);
    const button = document.querySelector(buttonSelector);
    const cards = Array.from(container.querySelectorAll('.card'));

    let visibleCount = 0;

    function removeButton() {
      if (button && button.parentNode) {
        button.remove();
      }
    }

    function showCards(count) {
      for (let i = visibleCount; i < visibleCount + count && i < cards.length; i++) {
        cards[i].style.display = 'flex';
        void cards[i].offsetWidth;
        cards[i].classList.add('visible');
      }
      visibleCount += count;

      if (visibleCount >= cards.length) {
        removeButton();
      }
    }

    if (cards.length <= initialCount) {
      showCards(cards.length);
      return;
    }

    showCards(initialCount);

    button.addEventListener('click', () => {
      showCards(increment);
    });
  }

  initViewMore('#cardsContainer', '#viewMoreBtn', 3, 3);