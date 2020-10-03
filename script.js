const black = document.getElementById("piece1");
const white = document.getElementById("piece2");
const board = document.getElementById("board");
let result, advance;
const die = document.querySelector(".dice");
let move = [];
const moveWhite = [];
const moveBlack = [];
let oldx, x;
die.addEventListener('click', rollDice);
let dice = 'active';

let currentPlayer = white;

//Move and check for snakes and ladders and a win.
function go(x){
    switch ((x.toString())){
        case "id24":
            currentPlayer.classList = "";
            currentPlayer.classList.add('id24');
            dice = "inactive";
            die.style.display = "none";
            setTimeout(()=> {currentPlayer === black ? board.innerHTML = "<h1>BLACK JOLLY WELL WINS</h1>" : board.innerHTML = "<h1>WHITE JOLLY WELL WINS</h1>";}, 1000);
            setTimeout(()=>{location.reload(); dice="active";}, 3000);
            break;
        case "id9":
            currentPlayer.classList = "";
            currentPlayer.classList = "id9";
            move.length = 0;
            move.push(3);
            dice = 'inactive';
            setTimeout(function(){currentPlayer.classList = ""; currentPlayer.classList.add('id3');  dice = 'active';}, 1500);
            
            break;
        case "id7":
            currentPlayer.classList = "";
            currentPlayer.classList.add('id7');
            move.length = 0;
            move.push(15);
            dice = 'inactive';
            setTimeout(function(){currentPlayer.classList = ""; currentPlayer.classList.add('id15');  dice = 'active'}, 1500);
           
            break;   
        case "id13":
            currentPlayer.classList = "";
            currentPlayer.classList.add('id13');
            move.length = 0;
            move.push(10);
            dice = 'inactive';
            setTimeout(function(){currentPlayer.classList = ""; currentPlayer.classList.add('id10');dice = 'active'}, 1500);
            
            break;   
        case "id14":
            currentPlayer.classList = "";
            currentPlayer.classList.add('id14');
            move.length = 0;
            move.push(21);
            dice = 'inactive';
            setTimeout(function(){currentPlayer.classList = ""; currentPlayer.classList.add('id21'); dice = 'active'}, 1500);
            
            break;   
        case "id23":
            currentPlayer.classList = "";
            currentPlayer.classList.add('id23');
            dice = 'inactive';
            setTimeout(function(){currentPlayer.classList = ""; currentPlayer.classList.add('id16'); dice = 'active'}, 1500);
           
            break;   
        default: 
        currentPlayer.classList = "";
         currentPlayer.classList.add(x.toString());

    }

}
   result= Math.floor(Math.random() * 6);

//rollDice and get move
function rollDice(){
    if (dice === 'inactive'){
        return false;
    }
    currentPlayer === white? currentPlayer = black : currentPlayer =white;
 currentPlayer === white? move = moveWhite : move = moveBlack;
    // get a number between 0 and 5
    result= Math.floor(Math.random() * 6);
    //set the dice text on the DOM to 1 to 6;
    die.textContent = result + 1;
    //get a variable
    let advance = result + 1;
    // put the variable into an array
    move.push(advance);
    // calculate the sum of the array
   let nextmove = move.reduce((a,b) => a+b, 0);
   move.length = 0;
   move.push(nextmove);
//    check for win
   nextmove >= 24 ? nextmove=24 : nextmove = nextmove;
    //concatenate variable with "id" to get name of class
    let x = 'id' + nextmove.toString();
    //call the move function
    console.log(x);
   go(x);
};









// Move pieces

// var black = dragElement(document.getElementById("piece1"));
// var white = dragElement(document.getElementById("piece2"));

// function dragElement(elmnt) {
//     var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
//     elmnt.onmousedown = dragMouseDown;


// function dragMouseDown(e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos3 = e.clientX;
//     pos4 = e.clientY;
//     document.onmouseup = closeDragElement;
//     document.onmousemove = elementDrag;
// }

// function elementDrag (e) {
//     e = e || window.event;
//     e.preventDefault();
//     pos1 = pos3 - e.clientX;
//     pos2 = pos4 - e.clientY;
//     pos3 = e.clientX;
//     pos4 = e.clientY;

//     elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
//     elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";

// }

// function closeDragElement() {
//     document.onmouseup = null;
//     document.onmousemove = null;
// }



