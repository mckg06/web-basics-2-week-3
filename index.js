const battleship = () => {

  let winner; 
  
  alert('Welcome to the game of battleship!');
  
  //step 1: create players
  let player1 ={
  name: '',
  shipCount: 4,
  positionsGuessed:[],
  gameBoard:[[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]
  };
  
  let player2 ={
  name: '',
  shipCount:4,
  positionsGuessed:[],
  gameBoard:[[0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0],
            [0, 0, 0, 0]]
  };
  
  player1.name= prompt ('Player 1, enter name');
  player2.name= prompt ('Player 2, enter name');
  
  //step 2: randomly place ships on board
  
   placeShips= (playerBoard) => {
        for (i=0; i<4; i++) {
          let posX= Math.floor(Math.random()*4)
          let posY= Math.floor(Math.random()*4)
  
        if (playerBoard[posX][posY] == 0) {
          playerBoard[posX][posY] = 1
        } else {
          i--;
        }
       }
      }
  placeShips(player1.gameBoard);
  placeShips(player2.gameBoard);
  
  console.log(`${player1.name}'s board: `, player1.gameBoard[0], player1.gameBoard[1], player1.gameBoard[2], player1.gameBoard[3],);
  console.log(`${player2.name}'s board: `, player2.gameBoard[0], player2.gameBoard[1], player2.gameBoard[2], player2.gameBoard[3],);
  
  //step 3: start the game
  
   gamePlay = (currentPlayer, opponent) => {
  let guessX;
  let guessY;
  
  if (currentPlayer.positionsGuessed[0] == undefined) {
  guessX = prompt(`${currentPlayer.name}'s turn. Please enter a whole number between 0-3 as your x coordinate for where you want to strike.`)
  guessY = prompt(`${currentPlayer.name}'s turn. Please enter a whole number 0-3 as your y coordinate for where you want to strike.`)
  currentPlayer.positionsGuessed.push(`X:${guessX}, Y:${guessY}`);
  console.log(`${currentPlayer.name}'s guesses:`, currentPlayer.positionsGuessed);
  } else {
    guessX = prompt(`${currentPlayer.name}'s turn. \n${opponent.name} has ${opponent.shipCount} ship(s) left. \nYou've already guessed these locations: \n${currentPlayer.positionsGuessed.join(" ")} \nPlease enter an X position between 0-3`)
    guessY = prompt(`${currentPlayer.name}'s turn. \n${opponent.name} has ${opponent.shipCount} ship(s) left. \nYou've already guessed these locations: \n${currentPlayer.positionsGuessed.join(" ")} \nPlease enter a Y position between 0-3`)
    currentPlayer.positionsGuessed.push(`X:${guessX}, Y:${guessY}`);
    console.log(`${currentPlayer.name}'s guesses: `, currentPlayer.positionsGuessed);
  }
  
  if (opponent.gameBoard[guessX][guessY] == 1) {
    alert("Hit!");
    opponent.gameBoard[guessX][guessY] = 0;
    opponent.shipCount--;
  } else{
    alert("Miss!");
  }
  
  if (opponent.shipCount == 0) {
    winner = alert(`${currentPlayer.name} is the winner!`);
  //step 4 end game and return winner
   return winner;
  } else {
    if (currentPlayer == player1) {
      gamePlay(player2, player1);
    } else {
      gamePlay(player1, player2);
    } 
  }
   }
  
   gamePlay(player1, player2);
  }
  
  
 
const gameResult = battleship()

const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
