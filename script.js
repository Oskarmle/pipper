// Vi importere den funktion som henter pips fra
import { fetchPips } from "./get-pip.js";

import { createPip, postPip } from "./create-pip.js";

import { imageToBase64 } from "./image-helpers.js";

const form = document.getElementById("create-pip-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const data = new FormData(form);

  const username = data.get("username");
  const text = data.get("add-text");
  const image = data.get("image");
  const base64 = await imageToBase64(image);

  // Vi opretter et objekt
  const pipObject = {
    username: username,
    text_area: text,
    img_base64: base64,
  };

  const pip = postPip(pipObject);
});

async function load() {
  //eftersom fetchPips er asynkron, saa skal load ogsaa vaere
  const body = await fetchPips(); //body er alle vores pips

  body.forEach((pip) => {
    //der staar body fordi det er vores nye array
    createPip(pip);
  });
}

load();
