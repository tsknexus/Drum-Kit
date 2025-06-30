var  NumberofDrums = document.querySelectorAll(".drum").length;


   // This part is for Buttons / Mouse

for ( var i = 0; i< NumberofDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click" , function () {
        
        var ButtoninnerWords = this.innerHTML;

         MakeSounds(ButtoninnerWords); 

         ButtonAnimation(ButtoninnerWords);  // changes the css styles

    });
   }
    // This part is for keyboard 

    document.addEventListener("keydown" , function(event){
      MakeSounds(event.key);

      ButtonAnimation(event.key);  // changes the css Style
    })


    function MakeSounds(key){

              switch(key){
            case"w":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;

            case"a":
                var kick = new Audio("sounds/kick-bass.mp3");
                kick.play();
                break;

             case"s":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;

             case"d":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

             case"j":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

             case"k":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

             case"l":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

                default: console.log(ButtoninnerWords);
        }

    }

   function ButtonAnimation(currentkey){
      var activekey = document.querySelector("." + currentkey);

      activekey.classList.add("pressed");

      setTimeout(function() {
         activekey.classList.remove("pressed");
      },100);
   }
