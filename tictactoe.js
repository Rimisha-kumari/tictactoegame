let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#Reset");
let newGameBtn = document.querySelector("#new-btn");
let  msgContainer =document.querySelector(".msg-container");
let  msg =document.querySelector("#msg");
let turn0 = true;
 let count = 0;
// let arr= [ "orange" ,"mango", "banana"];

// let fruits = [["banana","mango"],["apple","guava"],["papaya","pineapple"]];
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box) => {
  box.addEventListener("click",() => {
     console.log("box was clicked");
     if (turn0 === true){//turn of player O
        box.innerText = "0";
        turn0 = false;//it turns false after getting true for once
     }
     else{//turn of player X
        box.innerText = "X";
        turn0 = true;
     }
     box.disabled = true;
     count++;
    
  });
});
const resetGame = () =>{
   turn0 = true;
   count = 0;
   enableBoxes();
   msgContainer.classList.add("hide");
};
const showWinner = () =>{
   msg.innerText = 'Congratulations , Winner is $(Winner)';
   msgContainer.classList.remove("hide");
   disableBoxes();
}
const disableBoxes = () =>{
   for(let box of boxes){
      box.disabled = true;
   }
};
const enableBoxes = () =>{
   for(let box of boxes){
      box.disabled = false;
      box.innerText = "";

   }
};

const checkWinner = () =>{ 
    for ( let pattern of winpatterns )
    {
    //     console.log([pattern[0]],[pattern[1]],[pattern[2]]);
    //     console.log(boxes[pattern[0]].innerText,
    //         boxes[pattern[1]].innerText,
    //         boxes[pattern[2]].innerText);
    // };
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;
    
    if (pos1Val !=" " && pos2Val !=" " &&  pos3Val !=" "){
        if (pos1Val === pos2Val && pos2Val === pos3Val){
            console.log("winner",pos1Val);
            showWinner(pos1Val);
            return true;
        }
    }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);