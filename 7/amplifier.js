class Amplifier {
    constructor(name, intcode_computer) {
        this.name = name,
        this.output = 0,
        this.intcode_computer = intcode_computer
    }

    run(puzzleInput, phaseSetting, previous_signal) {
        this.intcode_computer.process(puzzleInput, phaseSetting, previous_signal)
        this.output = this.intcode_computer.output
    }
}

module.exports = Amplifier
