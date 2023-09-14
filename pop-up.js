
// jeg fortæller min kode at på knapper "pip", skal "popup_container" vise sig. jeg tjekker at den øverste funktion virke ved at brige console.log("hej fra funktion").
document.getElementById("pip").addEventListener("click", function(){
    console.log("hej fra function")
    document.querySelector(".popup_container").style.display = "flex";
})

// jeg fortæller min kode at når jeg trykker på "post-knap" skal "popup_container" ikke vise sig.

document.querySelector(".post-knap").addEventListener("click", function(){
    console.log("nej")
    document.querySelector(".popup_container").style.display = "none";



})
















// function pipclickfunction() {
//   let popup = document.getElementById("popup-container");
//   popup.classList.toggle("show");
// }


// let elem = document.getElementsByClassName('send:after');

// for(let i = 0; i < elem.length; i++) {
//  elem[i].addEventListener("click", function(){ 
    
//             document.querySelector(".popup").style.display = "block";
       

     
//  }, false);
// }
    



// document.querySelector("#close").addEventListener("click", function(){
//     document.querySelector(".popup").style.display = "none";
// });


