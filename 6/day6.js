const fs = require('fs')
const Planet = require('./planet')
const Galaxy = require('./galaxy')

let planetMap = fs.readFileSync('puzzleinput.txt').toString().trim().split('\n')
// let planetMap = fs.readFileSync('testinput.txt').toString().trim().split('\n')
let planetMapArray = []

// split text ABC)DEF to array of arrays [[ABC,DEF],[GHI,JKL]]
for (let i = 0; i < planetMap.length; i++) {
    planetMap[i] = planetMap[i].substr(0,7) // REMOVE \r
    planetMapArray.push(planetMap[i].split(')'))
}

// handling textinput because the input is layed our different
// for (let i = 0; i < planetMapArray.length; i++) {
//     planetMapArray[i][1] = planetMapArray[i][1].substr(0,1)
// }

let planets = new Galaxy()

for (let i = 0; i < planetMapArray.length; i++) {
    if (!planets.planetExist(planetMapArray[i][0])) {
        planets.addPlanet(new Planet(planetMapArray[i][0]))
    }
    if (!planets.planetExist(planetMapArray[i][1])) {
        planets.addPlanet(new Planet(planetMapArray[i][1]))
    }

    planets.getPlanet(planetMapArray[i][1]).addOrbit(planetMapArray[i][0])
}

console.log(planets)
console.log(planets.countOrbits())
