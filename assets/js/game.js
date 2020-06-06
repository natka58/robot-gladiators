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
    "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
  );
  window.alert("shopping");
  // use switch to carry out action
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
  case "LEAVE": // new case
  case "leave":
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
  
        }          
       
        //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth =Math.max (0, enemyHealth - damage);
      // Log a resulting message to the console so we know that it worked.
      console.log(
        playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      );
    // check enemy's health
    if (enemyHealth <= 0) {
        window.alert(enemyNames + " has died!");
    // award player money for winning
      playerMoney = playerMoney + 20;
        break;
      } else {
        window.alert(enemyNames + " still has " + enemyHealth + " health left.");
      }
    
      // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
      var damage = randomNumber(enemyAttack - 3, enemyAttack);
      playerHealth = Math.max(0, playerHealth - damage);
      // Log a resulting message to the console so we know that it worked.
      console.log(
        enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
      
    // check player's health
    if (playerHealth <= 0) {
        console.log (playerName + " has " + playerHealth + " health left");
        window.alert(playerName + " has died!");
        break;
        
      } 
      else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
      }
      //if player choses to skip
    }
   }

  
// start the game when the page loads
startGame();


  