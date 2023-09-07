// Variable til main hvor alle pips er placeret
const mainContent = document.getElementById("main");

function createPip(x) {
  // Vi skal finde templame med ID fra HTML dokument
  const template = document.getElementById("PipTemplate");

  //   clone template, så vi ikke ***** noget up
  const clone = document.importNode(template.contentEditable, true);
}
