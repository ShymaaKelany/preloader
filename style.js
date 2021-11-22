 function showimg(img){
  document.getElementById("main-img").src =img ;
 }

 var loader =document.getElementById("preloader");
 window.addEventListener("load" , function(){
   loader.style.display ="none"
 })