class Amplifier {
    constructor(intcode_computer) {
        this.output = 0,
        this.intcode_computer = intcode_computer,
        this.last_opcode = 0,
        this.previous_amplifier_signal = 0,
        this.feedback_loop = false
    }

    run(phaseSetting) {
        this.intcode_computer.process(phaseSetting, this.previous_amplifier_signal)
        this.output = this.intcode_computer.output
    }

    run_feedback_loop(phaseSetting) {
        this.intcode_computer.process(phaseSetting, this.previous_amplifier_signal)
        this.output = this.intcode_computer.output
        this.last_opcode = this.intcode_computer.opcode
    }

    output_signal() {
        return this.output
    }

    input_signal(signal) {
        this.previous_amplifier_signal = signal
    }
}

module.exports = Amplifier
