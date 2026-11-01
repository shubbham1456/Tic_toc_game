// let boxes = document.querySelectorAll(".box");
// let msgContainer = document.querySelectorAll(".msg");
// let msg = document.querySelectorAll("#win");
// let reset = document.querySelectorAll("#re");
// let Newgame = document.querySelectorAll("#ne");

let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#re");
let New = document.querySelector("#ne");
let msgContainer = document.querySelector(".msg");
let msg = document.querySelector("#win");

let TurnO = true;

const arr = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

const resetG = () =>{
    TurnO = true;
    EnableBox();
    msgContainer.classList.add("hide");

}

boxes.forEach((box) => {
   box.addEventListener("click", () => {
    // console.log("box is click");

     if(TurnO){
            box.innerText = "O";
            TurnO = false;
        }else{
            box.innerText = "X";
             TurnO = true;
        }
      box.disabled = true;

        checkWinner ();
   });
});

const DisableBox = () => {
    for(let j of boxes){
        j.disabled = true;
    }
};


const EnableBox = () => {
    for(let j of boxes){
        j.disabled = false;
        j.innerText =  "";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulation Winner is ${winner}`;
    msgContainer.classList.remove("hide");
     DisableBox();
};




const checkWinner = () => {
    for(let i of arr){
      let pos1 = boxes[i[0]].innerText;
      let pos2 = boxes[i[1]].innerText;
      let pos3 = boxes[i[2]].innerText;

       if(pos1 != "" && pos2 != "" && pos3 != ""){
         if(pos1 == pos2 && pos2 == pos3){
            console.log("Winner is ",pos1)
            showWinner(pos1);
        }
           
       }
    }
};

reset.addEventListener("click",resetG);
New.addEventListener("click",resetG);


// const resetG = () => {
//     turnO = true;
//      enablebox();
//        msgContainer.classList.add("hide");
     
// };

// boxes.forEach((box) => {
//     box.addEventListener("click",() => {
//         console.log("box is clicked")
//         if(turnO){
//             box.innerText = "O";
//             turnO = false;
//         }else{
//             box.innerText = "X";
//              turnO = true;
//         }
//         box.disabled = true;
//         checkWinner ();
//     });
// });

// const enablebox = () => {
//     for(let i of boxes){
//         box.disabled = false;
//         box.innnerText = "";
//     }
// };

// const disabledbox = () => {
//     for(let i of boxes){
//         box.disabled = true;
//     }
// };

// const showWinner = (winner) => {
//     msg.innerText  = `Congratulation Player ${winner}`;
//     // msgContainer.classList.remove("hide");
//     msgContainer.classList.remove("hide");
//     disabledbox();
// };

// const checkWinner = () => {
//     for(let i of Arr){ 
//         let pos1 = boxes[i[0]].innerText;
//         let pos2 = boxes[i[1]].innerText;
//         let pos3 = boxes[i[2]].innerText;

//        if(pos1 != "" && pos2 != "" && pos3 != ""){
//          if(pos1 == pos2 && pos2 == pos3){
//             console.log("Winner is ",pos1)
//             showWinner(pos1);
//         }
//        }
//     }
// };

// reset.addEventListener("click",resetG);
// Newgame.addEventListener("click",resetG);
