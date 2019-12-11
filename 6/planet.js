class Planet {
    constructor(name) {
        this.name = name,
        this.orbits = null
    }

    addOrbit(planet) {
        this.orbits = planet
    }
}

module.exports = Planet
