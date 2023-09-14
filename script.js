// Vi importere den funktion som henter pips fra
import { fetchPips } from "./get-pip.js";

import { createPip } from "./create-pip.js";

async function load() {
  //eftersom fetchPips er asynkron, saa skal load ogsaa vaere
  const body = await fetchPips(); //body er alle vores pips

  body.forEach((pip) => {
    //der staar body fordi det er vores nye array
    createPip(pip);
  });
}

load();
