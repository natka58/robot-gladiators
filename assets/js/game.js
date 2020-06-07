var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// function to start a new game
var startGame = function() {
  
  // reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;

  for(var i = 0; i < enemyNames.length; i++){
    if (playerHealth > 0) {
      window.alert("Welcome to Robot Gladiators! Round" + (i+1));
      var pickedEnemyName = enemyNames[i];
      enemyHealth = Math.floor(Math.random() * 60);
      fight(pickedEnemyName);
      // if we're not at the last enemy in the array
      if (playerHealth > 0 && i < enemyNames.length - 1) {
      // ask if user wants to use the store before next round
      var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");

      // if yes, take them to the store() function
        if (storeConfirm){        
      shop();
      }
      }
    } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
   // function to generate a random numeric value
    var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};    
  }

    // play again
    // startGame();
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
}

// function to end the entire game
var endGame = function() {
  // if player is still alive, player wins!
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
  } 
  else {
    window.alert("You've lost your robot in battle.");
  }
// ask player if they'd like to play again
var playAgainConfirm = window.confirm("Would you like to play again?");

if (playAgainConfirm) {
  // restart the game
  startGame();
} 
else {
  window.alert("Thank you for playing Robot Gladiators! Come back soon!");
}
}

var shop = function() {
   // ask player what they'd like to do
   var shopOptionPrompt = window.prompt(
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one 1 for REFILL, 2 for UPGRADE, or 3 for LEAVE."
  );
  window.alert("shopping");
  debugger;
  // use switch to carry out action
  shopOptionPrompt = parseInt(shopOptionPrompt);
switch (shopOptionPrompt) {
  case "REFILL": // new case
  case "refill":
    if (playerMoney >= 7) {
      window.alert("Refilling player's health by 20 for 7 dollars.");

      playerHealth = Math.floor(Math.random() * 81) + 20;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }

    break;
  case "UPGRADE": // new case
  case "upgrade":
    if (playerMoney >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");

      playerAttack = playerAttack + 6;
      playerMoney = playerMoney - 7;
    }
    else {
      window.alert("You don't have enough money!");
    }

    break;
  // case "LEAVE": // new case
  case 3:
    window.alert("Leaving the store.");
    break;
  default:
    window.alert("You did not pick a valid option. Try again.");
    shop();
    break;
}
}

var fight = function(enemyNames) {
    // repeat and execute as long as the enemy robot is alive
    while(enemyHealth > 0 && playerHealth > 0){
        // place fight function cod block here

    
        var promptFight = window.prompt("Would you  like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

         if (promptFight === "skip" || promptFight === "SKIP"){
            // confirm user wants to skip
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {      
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
            //subtract money from playermoney for skipping
            playerMoney = Math.max(0,playerMoney - 10);
            console.log ("playerMoney", playerMoney);
            break;
          }  
            // if no (false), ask question again by running fight () again
  
  promptFight = promptFight.toLowerCase();

  // if user picks "skip" confirm and then stop the loop
  if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm user wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.money = playerInfo.money - 10;
      return true;
      shop();
    } else {return false;}
  }
}

var fight = function(enemy) {
  // keep track of who goes first
  var isPlayerTurn = true;


  window.alert("isPlayerTurn is " + isPlayerTurn);
  console.log("isPlayerTurn is " + isPlayerTurn);
  while (playerInfo.health > 0 && enemy.health > 0) {
    var testRandom = Math.floor(Math.random()*2);
    if (testRandom === 0) {
      isPlayerTurn = false;
      
    }
    if (isPlayerTurn) {
      // ask user if they'd like to fight or skip using fightOrSkip function
      if (fightOrSkip()) {
        // if true, leave fight by breaking loop
        break;
      }
       var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

       // remove enemy's health by subtracting the avount we set in the damage variable
       enemy.health = Math.max(0, enemy.health - damage);
       console.log(
         playerInfo.name +
         "attacked" +
         enemy.name +
         ". " +
         enemy.name +
         "now has " +
         enemy.health +
         " health remaining."
       );

       // check enemy's health
       if (enemy.health <= 0) {
         window.alert(enemy.name + " has died!");

         // award player money for winning
         playerInfo.money = playerInfo.money + 20;

         // leave while() loop since enemy is dead
         break;
       } else {
         window.alert(enemy.name + " still has " + enemy.health + " health left.");

       }
       // player gets attacked first
      } else {
        var damage = randomNumber(enemy.attack - 3, enemy.attack);

        // remove enemy's health by subtracting the amount we set in the damage variable
        playerInfo.health = Math.max(0, playerInfo.health - damage);
        console.log(
          enemy.name +
          " attacked " +
          playerInfo.name +
          ". " +
          playerInfo.health +
          " health remaining."
        )
        
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      // switch turn order for next round
      isPlayerTurn = !isPlayerTurn;
       }
}

  
// start the game when the page loads
startGame();


  
