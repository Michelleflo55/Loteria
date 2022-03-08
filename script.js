 //redirecting to second html page   
 document.querySelector('button')
 .addEventListener('click', () => {
     window.location.href = 'file:///Users/bubbies/ga_seir/projects/Loteria/play.html';
 });
//example
// let exArr = [
// {original position (0 change for each of the 14 )clicked:false, img:'www.exampleimgurl.com'}//paste 15 times add commas in between them all
//  ]
// console.log the array
//how to randomize js array
///////////SETTING UP PICTURE RANDOMIZATION
let picArr = [
        { originalPosition: 0, clicked: false, img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.eFOyDJbGyhvER8hLwcJAVAHaDt%26pid%3DApi&f=1' },
        { originalPosition: 1, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 2, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 3, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 4, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 5, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 6, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 7, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 8, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 9, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 10, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 11, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 12, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 13, clicked: false, img: 'www.exampleimageurl.com' },
        { originalPosition: 14, clicked: false, img: 'www.exampleimageurl.com' }
      ]
// I found this Fisher-Yates solution here: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      let shuffle = (array) => {
        let currentIndex = array.length, randomIndex;
                 // While there remain elements to shuffle...
                while (currentIndex != 0) {
                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                // And swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }
                return array;
      }
                        // Used like so
                shuffle(picArr);
                console.log(picArr);