class AmplifierSeries {
    constructor(sequence) {
        this.phase_settings = sequence,
        this.amplifiers = [],
        this.highest_signal = 0,
        this.feedback_loop = false
    }

    // part 1
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

    // part 2
    run_feedback_loop() {
        while (this.feedback_loop) {
            for (let i = 0; i < this.amplifiers.length; i++) {
                this.amplifiers[i].input_signal(this.get_previous_signal(i))
                this.amplifiers[i].run_feedback_loop(this.phase_settings[i])

                // console.log(this.phase_settings[i])

                console.log('räknare', i)
                if (this.amplifiers[i].last_opcode == 99) {
                    this.feedback_loop = false
                    console.log(i)
                }
            }
        }

        this.highest_signal = this.amplifiers[4].output
    }

    addAmplifier(amplifier) {
        this.amplifiers.push(amplifier)
    }

    activate_feedback_loop(state) {
        this.feedback_loop = state

        for (var i = 0; i < this.amplifiers.length; i++) {
            this.amplifiers[i].feedback_loop = state
            this.amplifiers[i].intcode_computer.feedback_loop = state
        }
    }

    get_previous_signal(i) {
        if (i == 0) {
            return this.amplifiers[4].output_signal()
        } else {
            return this.amplifiers[i - 1].output_signal()
        }
    }
}

module.exports = AmplifierSeries
