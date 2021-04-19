function rpsGame (yourChoice) {
   var humanChoice , botChoice ;
   humanChoice = yourChoice.id;
   botChoice = botch(rndNumer());
   result = desideWinner(humanChoice , botChoice);
   message = finalMessage(result);
   
   rpsFrontEnd (yourChoice.id , botChoice , message);
}
function rndNumer() {
  return  Math.floor(Math.random() * 3);
}
function botch (num) {
    return  ['rock' , 'paper' , 'scissors'][num];
}
function desideWinner (manChoice , comChoice) {
    var rpsDatabase = {
        'rock': {'scissors': 1 , 'rock': 0.5 , 'paper': 0 },
        'paper': {'rock': 1 , 'paper': 0.5 , 'scissors': 0},
        'scissors': {'paper': 1 ,'scissors': 0.5 , 'rock': 0}
    };
    var yourScore = rpsDatabase[manChoice][comChoice];
    var comScore = rpsDatabase[comChoice][manChoice];
    return [yourScore , comScore];

}
function finalMessage ([yourScore , comScore]) {
    if (yourScore === 0) {
        return { 'message':'you lost!' , 'color':'red'};
    } else if (yourScore === 0.5) {
        return {'message':'you tied!' , 'color':'yellow'};
    } else {
        return {'message': 'you won!' , 'color':'green'};
    }
}
function rpsFrontEnd (humanIm , botImg , fMessage) {
    var imageDatabase = {
        'rock': document.getElementById('rock').src , 
        'paper': document.getElementById('paper').src , 
        'scissors':  document.getElementById('scissors').src
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
     var botDiv = document.createElement('div');
      var messDiv = document.createElement('div');
    
      humanDiv.innerHTML = "<img src='" + imageDatabase[humanIm] + "' height = 150 width=150 >" 
       messDiv.innerHTML = "<h1 style='color: " + fMessage['color'] + "; font-size: 60px padding:  30px; '>" + fMessage['message'] + "</h1>"
       botDiv.innerHTML = "<img src='" + imageDatabase[botImg] + "' height = 150 width=150 >" 
      
     document.getElementById('flex-box').appendChild(humanDiv);
      document.getElementById('flex-box').appendChild(messDiv);
     document.getElementById('flex-box').appendChild(botDiv);
    

}
