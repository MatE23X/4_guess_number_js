
// let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(guessNum);


let secretNumber = Math.trunc((Math.random() * 20) + 1);

let guess = document.querySelector(".guess");
let check = document.querySelector(".check");
let score = 20;


check.addEventListener("click",function()
{   
  
    
    let guess = document.querySelector(".guess").value;
    let guessNum = parseInt(guess);
    if(!guess){
       alert('please enter a number between 1 and 20');
       }
    else{
        if (guessNum === secretNumber){
            document.querySelector(".message").textContent = "Correct Number!";
            document.querySelector("body").style.background = "green";
            document.querySelector(".secret").textContent = secretNumber;
            document.querySelector(".high-score").textContent = score;
            
        }
        else{
            if(guess > secretNumber){
                
                
                if (score > 1) {
                    document.querySelector(".message").textContent = "Too High";
                    document.querySelector("body").style.background = "red";
                    score = score - 1;
                    document.querySelector(".score").textContent = score;
                    
                }
                else{
                    document.querySelector(".message").textContent = "You lost the game!";
                    document.querySelector("body").style.background = "red";
                    document.querySelector(".score").textContent = 0;
                }
                
            }
            else if(guess < secretNumber){
                if(score > 1){
                    document.querySelector(".message").textContent = "Too low";
                    document.querySelector("body").style.background = "blue";
                    score = score - 1;
                    document.querySelector(".score").textContent = score;
                }
                else{
                    document.querySelector(".message").textContent = "Too low";
                    document.querySelector("body").style.background = "blue";
                    document.querySelector(".score").textContent = 0;
                }
            }
        }
    
    }
  
 
    

    
}
)
//video stopped at 1:42:45
