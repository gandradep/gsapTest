gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  let text = document.querySelector(".title");
  gsap.set(text, { opacity: 1 });
  let mySplitText = SplitText.create(text, {
    type: "chars, words",
    charsClass: "char"
  });
  let chars = mySplitText.chars;

  gsap.from(chars, {
    duration: 3,
    opacity: 0,
    scale: 0,
    y: 80,
    rotationX: 180,
    transformOrigin: "0% 50% -50",
    ease: "back",
    stagger: 0.05,
    onComplete: () => {
      mySplitText.revert();
      text.removeAttribute("aria-hidden");
    }
  });
});


