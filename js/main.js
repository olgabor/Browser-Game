
let container = document.createElement('div')
container.setAttribute('class', 'container') 

// append container element to DOM 
document.body.appendChild(container)

//array for parsed images 
let faceSide =[]
//clicked buttons 
let clickedButtons = []

//have the cells added to .container, function takes the number of cards needed to be added 
const getCells = (number) => {
    for(let i = 1; i <=number; i ++){
        let cell = document.createElement('img')
        cell.src = '/Images/red_apples.jpg'
        cell.className = 'button'
        cell.value = i
        container.appendChild(cell)
    }
};
getCells(16)

//user to click the button 
container.addEventListener('click', () =>{
    
    getImageFlipped(event)
    // getMatch(event)
})

const getCards= (num) =>{
    for(let i = 1; i <= num; i ++){
        let img = document.createElement('img')
        img.setAttribute('src', `/Images/card${[i]}.jpg`)
        img.setAttribute('value', i)
        faceSide.push(img, img)
    }
    return faceSide 
}

getCards(8)

//shuffle the array 
const shuffle = (array) => {
    for( let i = array.length-1; i >= 1; i --){
        let j = Math.floor(Math.random() * array.length)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }  
}
shuffle(faceSide)


//if elemets in the array equal --> true , else --> false 
const arrayEqual = (array)=> {
    if(array.length === 2 ){
        return array[0].value === array[1].value }

}

let clickedCards = 0
let previousOpenedCard = []
const getImageFlipped = (event) => {
    if(clickedCards >= 2){
        return
    }
    if( event.target === container){  
    } 
    else {
        event.target.src = `${faceSide[event.target.value - 1 ].src}`
        console.log(event.target.value)
            if( clickedButtons.length === 0 ){
                clickedButtons.push(event.target) 
                console.log(clickedButtons[0].src)
                previousOpenedCard = event.target
                clickedCards += 1
                console.log('start')
                // console.log(previousOpenedCard)
                // console.log(clickedButtons)
                // console.log(clickedCards)

            }
            else if( (clickedButtons[0].src  === event.target.src ) && (clickedButtons[0] !== event.target)) {
                clickedButtons[0].style.opacity =  0.5
                event.target.style.opacity =  0.5 
                clickedButtons = []
                clickedCards = 0 
                console.log('positive')
                // console.log(previousOpenedCard)
                console.log(clickedButtons)
                // console.log(clickedCards)

            } else if( ( clickedButtons[0].src !== event.target.src )) {

                event.target.src = `${faceSide[event.target.value - 1 ].src}`
                console.log(event.target.src)
                setTimeout( () => {
                    previousOpenedCard.src = "/Images/red_apples.jpg"
                    event.target.src = '/Images/red_apples.jpg'
                }, 500)
                
                // previousOpenedCard = 0
                clickedButtons = []
                clickedCards = 0
                console.log('negative')
                // console.log(previousOpenedCard)
                // console.log(clickedButtons)
                // console.log(clickedCards)
            }
        }
    }












///set the while loop 
    // if more than 2 event.target are clicked - stop listening events 
    // compare the innerHTML.vlaues of both event.target elements 
        // if match 
            //add class name to the button and set opacity to 0 
            //reset the counter for clicked elements 
        //if no match 
            //remove images from both event.target elements 
            //reset the counter and continue 

     
            
////this WHILE loop is not working !             
// const getMatch = (event) => {

//     numberClikedElements = 0
//     while ( numberClikedElements <= 2 ){
//         if( event.target === container){
//             // 
//         } else { 
//             event.target.innerHTML=`<img src="${faceSide[event.target.value - 1 ].src}"/>`
//             numberClikedElements++ 
//         }
//         console.log(numberClikedElements)     
//     }
// }