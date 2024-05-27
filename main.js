let app = document.getElementById("typewriter");

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString(
    "Desarrolladora frontend especializada en la    implementación de soluciones web innovadoras y eficientes."
  )
  .pauseFor(200)
  .deleteChars(10)
  .start();
