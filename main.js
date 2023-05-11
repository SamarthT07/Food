const callToActionBtns = document.querySelectorAll(".mobile__CTA--btn");

callToActionBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    callToActionBtns.forEach(f => f != e.target ? f.classList.remove('active') : '');
      e.target.classList.toggle("active");
  });
});