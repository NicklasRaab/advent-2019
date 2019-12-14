class AmplifierSeries {
    constructor(sequence) {
        this.phase_settings = sequence,
        this.amplifiers = [],
        this.highest_signal = 0,
        this.feedback_loop = false
    }

    addAmplifier(amplifier) {
        this.amplifiers.push(amplifier)
    }

    run() {
        for (let i = 0; i < this.amplifiers.length; i++) {
            if (i > 0 && i < this.amplifiers.length) {
                let previous_amplifier_signal = this.amplifiers[i - 1].output_signal()
                this.amplifiers[i].input_signal(previous_amplifier_signal)
            }
            this.amplifiers[i].run(this.phase_settings[i])
        }
        this.highest_signal = this.amplifiers[4].output
    }

    activate_feedback_loop(activate) {
        if (activate) {
            this.feedback_loop = true
        }
    }

    feedback_loop() {
        while (this.feedback_loop) {

        }
    }
}

module.exports = AmplifierSeries
