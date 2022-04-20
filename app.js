let body = document.body
let canvas = document.querySelector('.container')
let paletteButton = document.querySelector('.button')
let pixel = document.getElementsByClassName('pixels')
let colorWheel = document.querySelector('.color')
const saveLocation = window.localStorage
const saveButton = document.getElementById('saveButton')
const loadButton = document.getElementById('loadButton')
const resetButton = document.getElementById('resetButton')
const floodButton = document.getElementById('floodButton')

function canvasTiles() {
    for (var i = 1; i <= 900; i++) {
        var divTile = document.createElement('div')
        divTile.setAttribute('class', 'pixels')
        canvas.appendChild(divTile)
    }
        for (var i = 0; i < pixel.length; i++) {
            pixel[i].addEventListener('click', function(e) {
                e.target.style.backgroundColor = colorWheel.value
            }) 
                pixel[i].addEventListener('mouseenter', function(e) {
                    if(e.buttons === 1) {
                        e.target.style.backgroundColor = colorWheel.value
                    }
                })   
            }
}

paletteButton.appendChild(colorWheel)

resetButton.addEventListener('click', () => {
    let pixels = document.querySelectorAll('.pixels')
    pixels.forEach((e) => {
        e.style.background = 'white'
    })
})

saveButton.addEventListener('click', function(){
    let currentArt = document.querySelectorAll('.pixels');
    let saveArt = [];

    currentArt.forEach((e)=>{
        saveArt.push(e.style.backgroundColor)
    })
    let saveFile = JSON.stringify(saveArt);
    saveLocation.setItem('art', saveFile);
})

loadButton.addEventListener('click', function(){
    let loadFile = saveLocation.getItem('art');
    let loaded = JSON.parse(loadFile);
    let currentArt = document.querySelectorAll('.pixels');

    loaded.forEach((e, i)=>{
        currentArt[i].style.background = e
    })
})
canvasTiles()




// function colorPicker() {
//     var x = document.createElement("INPUT");
//     x.setAttribute("type", "color");
//     document.body.appendChild(x);
// }

// colorPicker()

// mouseenter




