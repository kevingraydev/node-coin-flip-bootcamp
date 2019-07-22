//Goal: Simple web app that uses the "FS" and the "HTTP" modules.
//Use the http to creat the server
//Use FS to read your html file
//Include vanilla ES6 js in the script tag at the bottom of th your file html.
//Try creating a coinflip guessing game.


//for the coin toss guessing game
//1) you will have a coin (maybe a picture)
//2) people will push a button to flip a coin.
//2) before the person pushes the buttont to the flip the coin, they must make a wager as to whter the coinw ill be heads or tail. If the coin is their (the value of guess.)
//3) In order to select between the two options, there will be  radio bugtton.
//4) we coudl always add the functionality for them to be able to put money on it and add to whter they are win or loss.

//1// people will make a guess as to whether they will win or loos.
//2//they will click the button. and the randomizer will determine if its heads or tails.  We will create only two options, so we will use, mmaith floor or math celing or we could break the totoal amount up tinto tot things, but we could also do math random. between 1 and 2. and then do mail ceiling so then ti will be only one or tw.
//3//You will have to do somethign on click,

//4// THen you will evaluate.

//add all the files to css/html/jss.
//software engineer that specializes in web development /

function flipCoin() {
  document.querySelector('button').addEventListener( (e)=> {
    let result = math.Ceil(math.Random*2)
    if(result == 1){
      let response = "heads"
    }else{
      let response = "false"
    }
  }
}
