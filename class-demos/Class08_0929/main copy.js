//comment are two dashes in js

alert ('javasrcipt!')

console.log('log this info to the console')

//global variables:
let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

// window.onload is similar to setup/draw in p5.js
// all the code should be inside the window.onload function
window.onload = () => {
    // a shorthand for waitting for the page to load//
    console.log('page loaded')

    // get elelment by id
    //returns only one element with the id
    let mainElement = document.getElementById('main')
    //modifying style in css
    //js has the highest priofity of all
    mainElement.style.color = 'white'
    mainElement.style.backgroundColor = 'yellow'
    console.log(mainElement)

    //using querySelector only grabs the FIRST item in html that matches
    let firstParagraph = document.querySelector('p')
    let blueParagraph = document.querySelector('.blue')
    document.querySelector('#main')

    firstParagraph.textContent = 'i have updated this with js'
    blueParagraph.style.backgroundColor = 'lightblue'

    let containerDiv = document.querySelector('#blueDiv')
    for(let i = 0; i < 60; i++){
        //while creating an element on a webpage:
    //1. declare what type of element i want to create
    let newSpan = document.createElement('span')
    //2. add content to the element
    newSpan.textContent = 'new span'
    newSpan.classList.add('allSpans')
    //generate a random color
    let c = Math.floor(Math.random()*colors.length)
    newSpan.style.backgroundColor = colors[c];
    //3. add the element to the page
    //anywhere on the bottom of thte html: document.body
    //in a specific container: select the element
    containerDiv.appendChild(newSpan);
    }

    //set interval in built into js
    // 2params:
    //1. callback
    //2. time in milliseconds
    let rotation = 0
    setInterval(()=>{
        console.log('2 seconds has passed')
        //2 ways to retreve all the eleemnts of a class
        //document.getElementsByClassName('allSpans')
        let allSpans = document.querySelectorAll('.allSpans')
        document.querySelectorAll('.allSpans')
        console.log(allSpans)
        //shorthand for (let s = 0; s < allSpans.length; s++)
        for(let s in allSpans){
            s.style.transform = `rotate (${rotation}deg)`
            // I THINK IM MISSING SMT HERE..? so the console is going to stop saying 
            // "main copy.js:64 Uncaught TypeError: Cannot set properties of undefined (setting 'transform')"
            // ????? HELP
            rotation++
            console.log(s.style.transform)
        }
    },2000);

    //helper functions goes after window.onload{}
}

