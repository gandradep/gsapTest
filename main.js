gsap.registerPlugin(SplitText);

document.fonts.ready.then(() => {
  let text = document.querySelector(".title");
  gsap.set(text, { opacity: 1 });
  let mySplitText = SplitText.create(text, {
    type: "chars, words",
    charsClass: "char"
  });
  let chars = mySplitText.chars;

  gsap.fromTo(chars,
    {
      opacity: 0,
      scale: 0,
      y: 100,
      x:50,
      rotationX: -90,
      rotationZ: -45,
      transformOrigin: "50% 50%"
    },
    {
      duration: 1,
      opacity: 1,
      scale: 1,
      y: 0,
      x:0,
      rotationX: 0,
      rotationZ: 0,
      ease: "power1.out",
      stagger: 0.01,
    }
  );
});


