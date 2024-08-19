console.log("is everything working?")

//const myFunction = () => {
// THIS IS A FUNCTION
//}

const moveBox = (box:HTMLDivElement, destination:{x:number,y:number}) => {
    box.style.transform = `translate(${destination.x}px, ${destination.y}px)`
    box.style.transition = `transform 5s`
}

const box = document.querySelector('#box') as HTMLDivElement
const box2 = document.querySelector('#box2') as HTMLDivElement
const box3 = document.querySelector('#box3') as HTMLDivElement

moveBox(box, {x: 100, y: 100})
moveBox(box2, {x: 200, y: 200})
moveBox(box3, {x: 300, y: -300})
