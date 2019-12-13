class AmplifierSeries {
    constructor(sequence, puzzleInput) {
        this.sequence = sequence,
        this.puzzleInput = puzzleInput,
        this.amplifiers = [],
        this.highestSignal = 0
    }

    addAmplifier(amplifier) {
        this.amplifiers.push(amplifier)
    }

    run() {
        for (let i = 0; i < this.amplifiers.length; i++) {
            let phaseSetting = this.sequence[i]
            let previous_signal = 0
            i == 0 ? previous_signal = 0 : previous_signal = this.amplifiers[i - 1].output

            this.amplifiers[i].run(this.puzzleInput, phaseSetting, previous_signal)
        }

        this.highestSignal = this.amplifiers[4].output
    }
}

module.exports = AmplifierSeries
