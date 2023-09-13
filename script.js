import { fetchPips } from "./get-pip.js";
console.log("hej");
async function load() { //eftersom fetchPips er asynkron, saa skal load ogsaa vaere
    const body = await fetchPips(); //body er alle vores pips
 
    body.forEach((pip)=> { //der staar body fordi det er vores nye array
    //    createPip(pip);

//    document.getElementById('body').appendChild
    
    const para = document.createElement("p");
    para.innerText = pip.text_area;
    document.getElementById('body').appendChild(para);
    
    
    //console.log(pip);
    });
 }
 
 load();