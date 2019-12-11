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
}

module.exports = Galaxy
