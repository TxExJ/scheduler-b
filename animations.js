window.addEventListener("load", function() {
  const cards = document.querySelectorAll(".animated-card");
  const buttons = document.querySelectorAll(".animated-button");

  cards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = "translateY(20px)";
  });

  buttons.forEach(button => {
    button.style.opacity = 0;
    button.style.transform = "translateY(20px)";
  });

  window.addEventListener("scroll", function() {
    cards.forEach(card => {
      if (isElementInViewport(card)) {
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
        card.style.transition = "all 0.3s ease-in-out";
      }
    });

    buttons.forEach(button => {
      if (isElementInViewport(button)) {
        button.style.opacity = 1;
        button.style.transform = "translateY(0)";
        button.style.transition = "all 0.3s ease-in-out";
      }
    });
  });
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
