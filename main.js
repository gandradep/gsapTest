gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  const text = document.querySelector(".title");
  gsap.set(text, { opacity: 1 });
  let mySplitText = SplitText.create(text, {
    type: "chars, words",
    charsClass: "char"
  });
  let chars = mySplitText.chars;
  let words = mySplitText.words;
  gsap.fromTo(words,
    {

      x: 205,
    },
    {
      duration: 1.25,
      x: 0,
      ease: "power2.out",
      stagger: 0.01
    }
  );
  gsap.fromTo(chars,
    {
      opacity: 0,
      scale: 0,
      y: 80,
      rotationX: -180,
      rotationZ: -20,
      transformOrigin: "50% 100%"
    },
    {
      duration: 1.25,
      opacity: 1,
      scale: 1,
      y: 0,
      rotationX: 0,
      rotationZ: 0,
      ease: "power2.out",
      stagger: 0.01,
    }
  );
});
