var pictures = [
    "104899.jpg",
    "201328.png",
    "302087.jpg",
    "331278.jpg",
    "573856.jpg",
    "654344.jpg"
]
var next = document.querySelector(".next")
var prev = document.querySelector(".prev")
var bg = document.querySelector(".container")
// console.log(pictures.length)
var counter = 0
next.addEventListener('click', function(){
    counter++
    if (counter < pictures.length){
        bg.style.backgroundImage = `url("img/${pictures[counter]}")`
    } else{
        return counter = -1
    }
    // console.log(counter)
    
})
prev.addEventListener('click', function(){
    counter--
    if(counter < 0){
      return counter = pictures.length 
    }else{
        bg.style.backgroundImage = `url("img/${pictures[counter]}")`
    }
    // console.log(counter)
})