// Variable til main hvor alle pips er placeret
const mainContent = document.getElementById("main");

export function createPip(pip) {
  // Vi skal finde templame med ID fra HTML dokument
  const template = document.getElementById("pipTemplate");

  //   clone template, så vi ikke ***** noget up
  const clone = document.importNode(template.content, true);

  // Vi skal udfylde username id=bruger
  const usernameClone = clone.getElementById("bruger");
  usernameClone.id = "username" + pip.id;
  usernameClone.innerText = pip.username;

  // Vi skal udfylde textarea id=pip-text
  const piptextClone = clone.getElementById("pip-text");
  piptextClone.id = "piptext" + pip.id;
  piptextClone.innerText = pip.text_area;

  // Vi skal måske udfylde billede id=img
  const img = clone.getElementById("img");
  img.src = pip.img_base64;

  // Vi skal udfylde dato og tid id=datetime
  const datetimeClone = clone.getElementById("datetime");
  datetimeClone.id = "datetime" + pip.id;
  datetimeClone.innerText = pip.date;

  //   Vi sætter den udfyldte clone ind i vores Main på vores HTML
  mainContent.appendChild(clone);
}
