 //redirecting to second html page   
 let drawButton = document.querySelector('#drawCard')
 let gridPics = document.querySelectorAll('.gridPic')
         
 if(document.URL.includes('index.html')){
         let redirectButton = document.querySelector('#redirect')
                redirectButton.addEventListener('click', () => {
                window.location.href = 'play.html'
                });
        } else {
                // let drawButton = document.querySelector('#drawCard')
                // let gridPics = document.querySelectorAll('.gridPic')
                        drawButton.addEventListener('click', () =>{
                                console.log('banana')
                                let deck = document.getElementById('deck')
                                // let wholeGrid = Array(gridPics.length);
                             console.log(gridPics)  
                         gridPics.forEach((picture,idx)=>{
                                //  console.log(picture.src)
                                //  console.log(deck.src)
                       
                        let randDeck = picArr[Math.floor(Math.random()*(picArr.length))]
                                deck.src = randDeck.img  
                                console.log(deck.src)
                                let card = parseInt(picture.dataset.card)    
                                console.log(picture.dataset.card)
                                deck.dataset.card = randDeck.originalPosition
                                console.log(deck.dataset.card)
                                if(card===parseInt(deck.dataset.card))
                                 {
                                        console.log('inside if statement')
                                picture.src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.explicit.bing.net%2Fth%3Fid%3DOIP.vZWLwJ06gaUuYaNo2hje8QHaE8%26pid%3DApi&f=1'
                        } else {
                                
                        //        deck.src = picArr[Math.floor(Math.random()*picArr.length)].img
                        }; 
                        
                })   
                });       
        }
 
 
        
                

                ////SETTING UP PICTURE RANDOMIZATION
let picArr = [
        { originalPosition: 0, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s-zGgVVdiWlnr6VGqZcNJQHaLG%26pid%3DApi&f=1' },
        { originalPosition: 1, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.kWGzGhAXn-FaVOXkeN2WoAHaLG%26pid%3DApi&f=1' },
        { originalPosition: 2, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Wy_iDckBn3gieltZzLEw-gHaLG%26pid%3DApi&f=1' },
        { originalPosition: 3, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.explicit.bing.net%2Fth%3Fid%3DOIP.-MH4PvpGF1Mxqwygckf0nQHaKX%26pid%3DApi&f=1' },
        { originalPosition: 4, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.-6WOIGE-7UxCjL22r-ASEwHaJ4%26pid%3DApi&f=1' },
        { originalPosition: 5, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.sPo18Z4L-Vpp1TeEUJ2nJQHaLG%26pid%3DApi&f=1' },
        { originalPosition: 6, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Kj7TeS1OPJk5pFR0wRHNRgHaK0%26pid%3DApi&f=1' },
        { originalPosition: 7, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.wfYl6UQQmka_GmMzvS-wtwHaK1%26pid%3DApi&f=1' },
        { originalPosition: 8, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.cl722HZ2q1b5ABvJKnkhPgHaLG%26pid%3DApi&f=1' },
        { originalPosition: 9, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.ZDpGgHgg8dp5nxlFSunSEAHaLG%26pid%3DApi&f=1' },
        { originalPosition: 10, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.53IL0FO-H7bcIcH906cjowHaLH%26pid%3DApi&f=1' },
        { originalPosition: 11, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.m5GoqhCgYT_-_dNuGV8WWAHaLp%26pid%3DApi&f=1' },
        { originalPosition: 12, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.G4Y1nQnKGE70LCL1CrfW1gHaJQ%26pid%3DApi&f=1' },
        { originalPosition: 13, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Hr0oAeCOudeVJ-Pc7xQAHwHaLj%26pid%3DApi&f=1' },
        { originalPosition: 14, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qrxl5YVebK0U0k3JA4TVnQHaLG%26pid%3DApi&f=1' }
      ]
// I found this Fisher-Yates solution here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
//         let shuffle = (array) => {
//         let currentIndex = array.length, randomIndex;
//                  // While there remain elements to shuffle...
//                 while (currentIndex != 0) {
//                 // Pick a remaining element...
//                 randomIndex = Math.floor(Math.random() * currentIndex);
//                 currentIndex--; 
//               // And swap it with the current element.
//                  [array[currentIndex], array[randomIndex]] = [
//                 array[randomIndex], array[currentIndex]];
       
//         }
//                 return array;
//       }
//                // Used like so
//                 shuffle(picArr);
//                 console.log(picArr);
               
//                 // TARGETTING DECK
        
        // console.log(deck) //<--defining variable
        // deck.src = picArr[0].img //redifining variable

//         let gameOverArea = document.getElementById("loteria");
//         let gameOver = document.getElementById("loteria-text");
//         let playAgain = document.getElementById("play-again");
//         playAgain.addEventListener("click", startNewGame);
        
//         let gridFilled=grid.every((cell) => cell !== null);
//     if(gridFilled){
//         gameOverScreen(null);
//     }  
//     function gameOverScreen(winnerText){
//         let text = 'Loteria!'
//     };
//     gameOverArea.className = "visible";
//     gameOverText.innerText = text;
//     function startNewGame (){
//         gameOverArea.className = "hidden";
//         grid.fill(null);
//         cell.forEach((cell) => (cell.innerText = ""));
//         turn = PLAYER_X;
        
//         }
//         function drawButtonClick(event){
//                 if(gameOverArea.classList.contains("visible")){
//                   return;  
//                 }}
    
    
      