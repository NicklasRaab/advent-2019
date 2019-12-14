class Amplifier {
    constructor(intcode_computer) {
        this.output = 0,
        this.intcode_computer = intcode_computer,
        this.last_opcode = 0
        this.previous_amplifier_signal = 0
    }

    run(phaseSetting) {
        this.intcode_computer.process(phaseSetting, this.previous_amplifier_signal)
        this.output = this.intcode_computer.output
    }

    feedback_loop() {
        //run the computer, if code 99 return to series to stop looping
        this.output = this.intcode_computer.output
    }

    output_signal() {
        return this.output
    }

    input_signal(signal) {
        this.previous_amplifier_signal = signal
    }
}

module.exports = Amplifier
