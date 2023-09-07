// Variable til main hvor alle pips er placeret
const mainContent = document.getElementById("main");

function createPip(x) {
  // Vi skal finde templame med ID fra HTML dokument
  const template = document.getElementById("PipTemplate");

  //   clone template, så vi ikke ***** noget up
  const clone = document.importNode(template.content, true);

  // Vi skal udfylde avatar id=avatar
  const avatarClone = clone.getElementById("avatar");
  avatarClone.src = x.avatarURL;
  avatarClone.id = "avatar-" + x.id;

  // Vi skal udfylde username id=bruger
  const usernameClone = clone.getElementById("bruger");
  usernameClone.id = "username" + x.id;
  usernameClone.innerText = x.username;

  // Vi skal udfylde textarea id=pip-text
  const piptextClone = clone.getElementById("pip-text");
  piptextClone.id = "piptext" + x.id;
  piptextClone.innerText = x.text_area;

  // Vi skal måske udfylde billede id=img
  const img = clone.getElementById("img");
  img.src = x.imgURL;
  img.id = "image-" + x.id;

  // Vi skal udfylde dato og tid id=datetime
  const datetimeClone = clone.getElementById("datetime");
  datetimeClone.id = "datetime" + x.id;
  datetimeClone.innerText = x.date;

  //   Vi sætter den udfyldte clone ind i vores Main på vores HTML
  mainContent.appendChild(clone);
}
