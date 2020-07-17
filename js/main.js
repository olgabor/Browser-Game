
let container = document.createElement('div')
container.setAttribute('class', 'container') 

//round Number
let setRound = document.createElement('h1')
setRound.style.className = ('round')
setRound.style.color = 'crimson'
// append container and round element to DOM 
document.body.appendChild(container)
document.body.append(setRound)
setRound.innerHTML = ('Round ' + 1)

//array for parsed images 
let faceSide =[]
let currentlyClickedButton = [] //clicked buttons 
let round =  0 
let positive = 0
let clickedCards = 0 
let previousOpenedCard = []


//user to click the button 
container.addEventListener('click', () =>{
    
    getImageFlipped(event)
    
})

//have the cells added to .container, function takes the number of cards needed to be added 
const getCells = (number) => {
    for(let i = 1; i <=number; i ++){
        let cell = document.createElement('img')
        cell.src = '/Images/red_apples.jpg'
        cell.className = 'button'
        cell.value = i
        container.appendChild(cell)
    }
}
//get a new function to remoce cells from container 
const removeCells = () => {
        let divContainer = document.querySelector('.container')
        let child = divContainer.lastElementChild;  
   
        while (child) { 
            divContainer.removeChild(child); 
            child = divContainer.lastElementChild; 
        }
}

//shuffle the array 
const shuffle = (array) => {
    for( let i = array.length-1; i >= 1; i --){
        let j = Math.floor(Math.random() * array.length)
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }  
}

//parse out images in the array 
const getCards= (num) =>{
    faceSide = []
    for(let i = 1; i <= num; i ++){
        let img = document.createElement('img')
        img.setAttribute('src', `/Images/card${[i]}.jpg`)
        img.setAttribute('value', i)
        faceSide.push(img, img)
    }
    shuffle(faceSide)
    return faceSide 
}

const newRound = (positive) => {

    if (positive === 0 ){
        getCells(12)
        getCards(6)
    }
    
    else if ((positive >= 6  ) && (positive <= 13  )) {
        //clear the container every time new round starts 
        removeCells()
        getCells(16)
        getCards(8)
        round = 2
        setRound.innerHTML = ('Round ' + round)
        console.log(faceSide)
    }
    else if (positive === 14){
        removeCells()
        getCells(20)
        getCards(10)
        round  = 3 
        setRound.innerHTML = ('Round ' + round)
        console.log(faceSide)
    }
    if((positive >= 14  ) && (positive === 24  )){
        console.log("this is a last condition  " ,  positive)
        removeCells()
        setRound.innerHTML = ("Game over" )
    
    }

}
newRound(positive)


const getImageFlipped = (event) => {
    
    // more that 2 cards clicked - stop function from running 
    if(clickedCards >= 2){
        return
    }
    //clicks outside the buttons are not listened 
    if( event.target === container){  
    } 
    else {
        event.target.src = `${faceSide[event.target.value - 1 ].src}`
           
            //start the cards counted and write cards clicked to 
            if( currentlyClickedButton.length === 0 ){
                currentlyClickedButton.push(event.target) 
                previousOpenedCard = event.target
                clickedCards += 1

            }
            //positive scenario 
            else if( (currentlyClickedButton[0].src  === event.target.src ) && (currentlyClickedButton[0] !== event.target)) {
                currentlyClickedButton[0].style.opacity =  0.6
                event.target.style.opacity =  0.6
                currentlyClickedButton = []
                clickedCards = 0 
                previousOpenedCard = []
                positive ++
                if (positive === 6){

                setTimeout( () => {
                    newRound(positive)
                }, 200) 
               }
               else if(positive === 14){
                setTimeout( () => {
                    newRound(positive)
                }, 200) 
                
               }
               else if(positive === 24){
                setTimeout( () => {
                    newRound(positive)
                }, 200) 
                
               }

            // negative scenario 
            } else if(( currentlyClickedButton[0].src !== event.target.src ) &&(currentlyClickedButton[0] !== event.target)) {

                event.target.src = `${faceSide[event.target.value - 1 ].src}`
                setTimeout( () => {
                    previousOpenedCard.src = "/Images/red_apples.jpg"
                    event.target.src = '/Images/red_apples.jpg'
                }, 300)
                currentlyClickedButton = []
                clickedCards = 0
           
            }
        }

    }

