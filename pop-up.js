
// function pipclickfunction() {
//   let popup = document.getElementById("popup-container");
//   popup.classList.toggle("show");
// }


let elem = document.getElementsByClassName('send:after');

for(let i = 0; i < elem.length; i++) {
 elem[i].addEventListener("click", function(){ 
    
            document.querySelector(".popup").style.display = "block";
       

     
 }, false);
}
    



document.querySelector("#close").addEventListener("click", function(){
    document.querySelector(".popup").style.display = "none";
});