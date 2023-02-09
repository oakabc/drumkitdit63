// alert("Hello World!");


for (var i = 0; document.querySelectorAll(".drum").length ; i++ ) {

  document.querySelectorAll(".drum")[i].addEventListener("click",function () {
   
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

   // console.log(this.innerHTML)

   if (this.innerHTML==="w") {
    var audio = new Audio('sounds/tom-1.mp3');
    audio.play();
   }


  } );
}

// document.querySelector("button").addEventListener("click", handleClick);




