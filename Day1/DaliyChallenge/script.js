const plants=["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
// console.log(plants)
for(let planet of plants){
        // console.log(plant)   
const div=document.createElement("div")
div.classList.add("planet")
div.classList.add(planet)
console.log(div)
const shape=document.querySelector(".listPlanets")
shape.appendChild(div)
}         