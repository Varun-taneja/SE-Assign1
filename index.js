var noofdbtns = document.querySelectorAll(".drum").length;

for (var i = 0; i < noofdbtns; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var btninHTML = this.innerHTML;

    makesound(btninHTML);

    btnani(btninHTML);

  });

}

document.addEventListener("keydown", function(event) {
  makesound(event.key);
  btnani(event.key);
  btnani(event.key);
});

function makesound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default: console.log(btninHTML);
  }
}


function btnani(currkey){

  var activebtn = document.querySelector("." + currkey);
  activebtn.classList.add("pressed");

  setTimeout(function(){
    activebtn.classList.remove("pressed");
  } , 100);
}
