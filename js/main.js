
let container = document.createElement('div')
container.setAttribute('class', 'container') 

// append container element to DOM 
document.body.appendChild(container)

//array for parsed images 
faceSide =[]

//have the cells added to .container, function takes the number of cards needed to be added 
const getCells = (number) => {
    for(let i = 1; i <=number; i ++){
        let cell = document.createElement('button')
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
        console.log(i)
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

    console.log(faceSide)
}
shuffle(faceSide)


const getImageFlipped = (event) => {

    // if click is somewhere on the container 
    if( event.target === container){
        //
        // if button is clicked 
    } else { 
        event.target.innerHTML=`<img src="${faceSide[event.target.value - 1 ].src}"/>`
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