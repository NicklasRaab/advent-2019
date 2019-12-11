class Galaxy {
    constructor() {
        this.planets = []
    }

    addPlanet(planet) {
        this.planets.push(planet)
    }

    planetExist(name) {
        return this.planets.some(planet => planet.name == name)
    }

    getPlanet(name) {
        for (var i = 0; i < this.planets.length; i++) {
            if (this.planets[i].name == name) {
                return this.planets[i]
            }
        }
    }

    countOrbits() {
        let counter = 0;
        for (let i = 0; i < this.planets.length; i++) {
            let currentPlanet = this.planets[i]
            while(currentPlanet.orbits != null) {
                counter++
                currentPlanet = this.getPlanet(currentPlanet.orbits)
            }
        }

        return counter
    }

    pathToCom(planet) {
        let path = []
        path.push(planet.name)

        while (planet.orbits != 'COM') {
            path.push(planet.orbits)
            planet = this.getPlanet(planet.orbits)
        }

        return path
    }

    pathBetweenPlanets(planetA, planetB) {
        planetA = this.getPlanet(planetA)
        planetB = this.getPlanet(planetB)
        planetA = this.getPlanet(planetA.orbits)
        planetB = this.getPlanet(planetB.orbits)

        let pathToCOM_A = this.pathToCom(planetA).reverse()
        let pathToCOM_B = this.pathToCom(planetB).reverse()

        let breakpoint = 0
        for (var i = 0; i < pathToCOM_A.length; i++) {
            if (pathToCOM_A[i] != pathToCOM_B[i]) {
                breakpoint = i
                break
            }
        }

        let distance = pathToCOM_A.slice(breakpoint).length + pathToCOM_B.slice(breakpoint).length
        return distance
    }
}

module.exports = Galaxy
