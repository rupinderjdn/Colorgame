const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71']
let container = document.querySelector('.container')

for(let i=0; i<500 ;i++){
    let square = document.createElement('div')

    square.addEventListener("mouseover",()=>setColor(square))
    square.addEventListener("mouseout",()=>removeColor(square))

    square.classList.add('square')
    container.appendChild(square)
}
function setColor(e){
    const color = randomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}
function setColor(e){
    const color = randomColor()
    e.style.backgroundColor = color
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    
}
function removeColor(e){
    e.style.backgroundColor = 'rgb(31, 30, 30)'
    e.style.boxShadow = `0 0 2px black`
}
function randomColor(){
    const index = Math.floor(Math.random()*colors.length)
    return colors[index]
}
