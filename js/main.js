
let container = document.createElement('div')
container.setAttribute('class', 'container') 


//round Number
let setRound = document.createElement('h1')
setRound.style.className = ('round')
setRound.style.color = 'crimson'

// append container and round element to DOM 
document.body.appendChild(container)

// document.body.append(setRound)
setRound.innerHTML = ('Round ' + 1)
container.insertAdjacentElement("beforebegin" , setRound)

//game over heading 
let gameOver = document.createElement('h3')
gameOver.style.className = 'game-over'

//array for parsed images 
let faceSide =[]
let currentlyClickedButton = [] //clicked buttons 
let round =  1
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
        cell.src = 'Images/cover.jpeg'
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
        img.setAttribute('src', `./Images/card${[i]}.jpg`)
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
        setRound.innerHTML = ('Round ' + 1)
    }
    
    else if ((positive >= 6  ) && (positive <= 13)) {
        //clear the container every time new round starts 
        removeCells()
        getCells(16)
        getCards(8)
        round = 2
        setRound.innerHTML = ('Round ' + round)
    }
    else if ((positive === 14) && (positive <= 23)){
        removeCells()
        getCells(20)
        getCards(10)
        round  = 3 
        setRound.innerHTML = ('Round ' + round)
    }
    if((positive >= 14  ) && (positive === 24)){
        removeCells()
        setRound.innerHTML = " "
        container.append(gameOver)
        gameOver.innerHTML = 'GAME OVER'
    }
}
newRound(positive)


const getImageFlipped = (event) => {
    
    // more that 2 cards clicked - stop function from running 
    if(clickedCards >= 2){
        return
    }
    //// possible bug fix !! 
    // if(currentlyClickedButton[0].src === `${faceSide[event.target.value - 1 ].src}`){
    //     return  
    // }
    //clicks outside the buttons are not listened 
    if(event.target === container){  
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
                currentlyClickedButton[0].style.opacity =  0.8
                event.target.style.opacity =  0.8
                currentlyClickedButton = []
                clickedCards = 0 
                previousOpenedCard = []
                positive ++
                console.log('positive' )
          
                switch (positive) {
                    case  6 :
                        setTimeout( () => {
                            newRound(positive)
                        }, 200)
                    case 14:
                        setTimeout( () => {
                            newRound(positive)
                        }, 200)
                    case 24:
                        setTimeout( () => {
                            newRound(positive)
                        }, 200)  
                  }

            // negative scenario 
            } else if(( currentlyClickedButton[0].src !== event.target.src ) &&(currentlyClickedButton[0] !== event.target)) {

                event.target.src = `${faceSide[event.target.value - 1 ].src}`
                setTimeout( () => {
                    previousOpenedCard.src = "Images/cover.jpeg"
                    event.target.src = "Images/cover.jpeg"
                }, 300)
                currentlyClickedButton = []
                clickedCards = 0
            }
        }

    }

