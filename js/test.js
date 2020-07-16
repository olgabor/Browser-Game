console.log('Please welcome me in my first GAME!!')


// User lands on the web page where the 4*4 dashboard is preloaded with closed cells 
    // set up the html page with div container 
    // background 
    // div classes of cells 

//VARIABLES 
// array to store front images 
let faceSide = []
//new the element container 
let container = document.createElement('div')
container.setAttribute('class', 'container')

// append container element to DOM 
document.body.appendChild(container)

//have the cells added to .container, function takes the number of cards needed to be added 
const getCells = (number) => {
    for(let i = 1; i <=number; i ++){
        let cell = document.createElement('img')
        cell.src = '/Images/red_apples.jpg'
        cell.className = 'image'
        container.appendChild(cell)
    }
};
getCells(16)

// select all images on the page 
let images = document.querySelectorAll('img')

//click event on each image 
images.forEach(item => {
    item.addEventListener('click', (event) =>{
        console.log('This works')
        flipCard(event) /// apply random image 
        
        // checkMatch()
        // keepUncklckable()
    })
})

//create a function which will 
    // create an array of images 
    //shift the images in the array 
    //return random elemenent from the array 
const getFrontImage = (num) => {
    for (let i = 1; i <= num; i ++ ){
        let fontImage = document.createElement('img').src= `/Images/card${[i]}.jpg`
        // fontImage.setAttribute('value', i)
        faceSide.push(fontImage, fontImage)

    }  

    console.log("this is a faceSide" + faceSide)
    //shuffle the array of images 
    for( let i = faceSide.length-1; i >= 0; i --){
        let j = Math.floor(Math.random() * faceSide.length)
        let temp = faceSide[i]
        faceSide[i] = faceSide[j]
        faceSide[j] = temp
    }  
    //source: https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    
}


// when user click on the cell it flips over with image 
const flipCard = (event) => {
    
    getFrontImage(8)
    console.log('Here we go ' + event.target)
    event.target.src = faceSide[0]
    event.target.className = 'disabled'
    
    // usedImages[faceSide[0]] = 1 

    // console.log(usedImages)
    // for (const image in usedImages) {
    //     console.log("__________+++++++++++++++++")
    //     console.log(`${image}: ${usedImages[image]}`)
    //   } for (let value in usedImages){
    //       if( value === faceSide[0] ){
    //         usedImages[image] +1 
    //       }
    //   }
    
}



//create an object and store there images that were already added to the page, 
    //each image should have the counter 
    // if counter === 2 delete the image from faceSide array of images 


// create the function to check if match happened 
    // if match happened => keep cells open with images 
    // if match didn`t happen => set images to closed state 

// create the function to keep cells unclickable untill user completes the choice of two cells 

//create the function to keep track of revealed matches 
    // when 16 cells are all open (matches are identified) start the second round with 4*6 cells 
    


