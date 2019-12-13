class IntcodeComputer {
    constructor(input, previous_signal, puzzleinput) {
        this.pointer = 0
        this.instruction = '',
        this.opcode = undefined,
        this.params = [],
        this.input = input,
        this.previous_signal = previous_signal,
        this.puzzle = puzzleinput,
        this.run = true,
        this.output = undefined
    }

    process() {
        while (this.run === true) {
            this.setInstruction()
            this.setOpcode()
            this.setParams()
            this.executeOpcode()
        }
    }

    setInstruction() {
        let instruction = this.puzzle[this.pointer]
        instruction = instruction.toString()
        for (let i = instruction.length; i < 5; i++) {
            instruction = '0' + instruction
        }
        this.instruction = instruction
    }

    setOpcode() {
        if (this.instruction.charAt(3) == 0) {
            this.opcode = this.instruction.charAt(4)
        } else {
            this.opcode = this.instruction.slice(-2)
        }
    }

    setParams(instruction) {
        this.params = []
        this.params.push(this.instruction.charAt(2)) //first (C) parameter in instruction
        this.params.push(this.instruction.charAt(1)) //second (B) parameter in instruction
        this.params.push(this.instruction.charAt(0)) //third (A) parameter in instruction
    }

    executeOpcode() {
        let values = []
        if (this.opcode == 1) {

            this.params[0] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 1]]) : values.push(this.puzzle[this.pointer + 1])
            this.params[1] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 2]]) : values.push(this.puzzle[this.pointer + 2])
            this.puzzle[this.puzzle[this.pointer + 3]] = values[0] + values[1]
            this.pointer += 4

        } else if (this.opcode == 2) {

            this.params[0] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 1]]) : values.push(this.puzzle[this.pointer + 1])
            this.params[1] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 2]]) : values.push(this.puzzle[this.pointer + 2])
            this.puzzle[this.puzzle[this.pointer + 3]] = values[0] * values[1]
            this.pointer += 4

        } else if (this.opcode == 3) {

            //*************
            //SPECIAL INPUT
            //*************
            this.puzzle[this.puzzle[this.pointer + 1]] = this.input
            //*************
            //INPUT SET TO previous signal
            //*************
            this.input = this.previous_signal
            this.pointer += 2

        } else if (this.opcode == 4) {

            this.params[0] == 0 ? this.output = this.puzzle[this.puzzle[this.pointer + 1]] : this.output = this.puzzle[this.pointer + 1]
            console.log('output:', this.output)
            this.pointer += 2

        } else if (this.opcode == 5) {

            this.params[0] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 1]]) : values.push(this.puzzle[this.pointer + 1])
            this.params[1] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 2]]) : values.push(this.puzzle[this.pointer + 2])

            if (values[0] != 0) {
                this.params[1] == 0 ? this.pointer = this.puzzle[this.puzzle[this.pointer + 2]] : this.pointer = this.puzzle[this.pointer + 2]
            } else {
                this.pointer += 3
            }

        } else if (this.opcode == 6) {

            this.params[0] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 1]]) : values.push(this.puzzle[this.pointer + 1])
            this.params[1] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 2]]) : values.push(this.puzzle[this.pointer + 2])

            if (values[0] == 0) {
                this.params[1] == 0 ? this.pointer = this.puzzle[this.puzzle[this.pointer + 2]] : this.pointer = this.puzzle[this.pointer + 2]
            } else {
                this.pointer += 3
            }

        } else if (this.opcode == 7) {

            this.params[0] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 1]]) : values.push(this.puzzle[this.pointer + 1])
            this.params[1] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 2]]) : values.push(this.puzzle[this.pointer + 2])

            if (values[0] < values[1]) {
                this.params[2] == 0 ? this.puzzle[this.puzzle[this.pointer + 3]] = 1 : this.puzzle[this.pointer + 3] = 1
            } else {
                this.params[2] == 0 ? this.puzzle[this.puzzle[this.pointer + 3]] = 0 : this.puzzle[this.pointer + 3] = 0
            }
            this.pointer += 4

        } else if (this.opcode == 8) {

            this.params[0] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 1]]) : values.push(this.puzzle[this.pointer + 1])
            this.params[1] == 0 ? values.push(this.puzzle[this.puzzle[this.pointer + 2]]) : values.push(this.puzzle[this.pointer + 2])

            if (values[0] == values[1]) {
                this.params[2] == 0 ? this.puzzle[this.puzzle[this.pointer + 3]] = 1 : this.puzzle[this.pointer + 3] = 1
            } else {
                this.params[2] == 0 ? this.puzzle[this.puzzle[this.pointer + 3]] = 0 : this.puzzle[this.pointer + 3] = 0
            }
            this.pointer += 4

        } else if (this.opcode == 99) {
            console.log('opcode 99')
            this.run = false
        } else {
            console.log('run_error', this.pointer)
            this.run = false
        }
    }
}

module.exports = IntcodeComputer
