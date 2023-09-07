// Variable til main hvor alle pips er placeret
const mainContent = document.getElementById("main");

function createPip(x) {
  // Vi skal finde templame med ID fra HTML dokument
  const template = document.getElementById("PipTemplate");

  //   clone template, så vi ikke ***** noget up
  const clone = document.importNode(template.content, true);

  // Vi skal udfylde avatar

  // Vi skal udfylkde username

  // Vi skal udfylde textarea

  // Vi skal måske udfylde billede

  // Vi skal udfylde dato og tid

  //   Vi sætter den udfyldte clone ind i vores Main på vores HTML
  mainContent.appendChild(clone);
}
