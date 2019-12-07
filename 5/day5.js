const puzzleInput = [3,225,1,225,6,6,1100,1,238,225,104,0,1101,37,34,224,101,-71,224,224,4,224,1002,223,8,223,101,6,224,224,1,224,223,223,1002,113,50,224,1001,224,-2550,224,4,224,1002,223,8,223,101,2,224,224,1,223,224,223,1101,13,50,225,102,7,187,224,1001,224,-224,224,4,224,1002,223,8,223,1001,224,5,224,1,224,223,223,1101,79,72,225,1101,42,42,225,1102,46,76,224,101,-3496,224,224,4,224,102,8,223,223,101,5,224,224,1,223,224,223,1102,51,90,225,1101,11,91,225,1001,118,49,224,1001,224,-140,224,4,224,102,8,223,223,101,5,224,224,1,224,223,223,2,191,87,224,1001,224,-1218,224,4,224,1002,223,8,223,101,4,224,224,1,224,223,223,1,217,83,224,1001,224,-124,224,4,224,1002,223,8,223,101,5,224,224,1,223,224,223,1101,32,77,225,1101,29,80,225,101,93,58,224,1001,224,-143,224,4,224,102,8,223,223,1001,224,4,224,1,223,224,223,1101,45,69,225,4,223,99,0,0,0,677,0,0,0,0,0,0,0,0,0,0,0,1105,0,99999,1105,227,247,1105,1,99999,1005,227,99999,1005,0,256,1105,1,99999,1106,227,99999,1106,0,265,1105,1,99999,1006,0,99999,1006,227,274,1105,1,99999,1105,1,280,1105,1,99999,1,225,225,225,1101,294,0,0,105,1,0,1105,1,99999,1106,0,300,1105,1,99999,1,225,225,225,1101,314,0,0,106,0,0,1105,1,99999,7,226,226,224,102,2,223,223,1005,224,329,101,1,223,223,108,677,226,224,102,2,223,223,1005,224,344,1001,223,1,223,1108,226,677,224,102,2,223,223,1005,224,359,1001,223,1,223,8,677,226,224,102,2,223,223,1006,224,374,1001,223,1,223,107,226,226,224,102,2,223,223,1006,224,389,101,1,223,223,1108,677,226,224,1002,223,2,223,1005,224,404,1001,223,1,223,108,677,677,224,102,2,223,223,1005,224,419,101,1,223,223,7,226,677,224,1002,223,2,223,1006,224,434,1001,223,1,223,107,226,677,224,102,2,223,223,1005,224,449,101,1,223,223,1108,677,677,224,1002,223,2,223,1006,224,464,101,1,223,223,7,677,226,224,102,2,223,223,1006,224,479,101,1,223,223,1007,677,677,224,1002,223,2,223,1005,224,494,101,1,223,223,1008,226,226,224,102,2,223,223,1006,224,509,1001,223,1,223,107,677,677,224,102,2,223,223,1006,224,524,1001,223,1,223,8,226,226,224,1002,223,2,223,1005,224,539,1001,223,1,223,1007,677,226,224,102,2,223,223,1006,224,554,1001,223,1,223,1007,226,226,224,1002,223,2,223,1005,224,569,1001,223,1,223,8,226,677,224,1002,223,2,223,1006,224,584,101,1,223,223,108,226,226,224,1002,223,2,223,1006,224,599,101,1,223,223,1107,677,226,224,1002,223,2,223,1005,224,614,1001,223,1,223,1107,226,677,224,102,2,223,223,1006,224,629,1001,223,1,223,1008,226,677,224,102,2,223,223,1005,224,644,101,1,223,223,1107,226,226,224,102,2,223,223,1006,224,659,1001,223,1,223,1008,677,677,224,102,2,223,223,1006,224,674,1001,223,1,223,4,223,99,226]

// const puzzleInput = [3,21,1008,21,8,20,1005,20,22,107,8,21,20,1006,20,31,1106,0,36,98,0,0,1002,21,125,20,4,20,1105,1,46,104,999,1105,1,46,1101,1000,1,20,4,20,1105,1,46,98,99]


// initializing
let pi = puzzleInput
let pointer = 0
let specialInput = 5


//main program
let run = true
while (run) {
    //GETS INSTRUCTION FROM PUZZLE INPUT
    let instruction = pi[pointer].toString()

    //FILLS INSTRUCTION TO 5 DIGITS
    for (let i = instruction.length; i < 5; i++) {
        instruction = '0' + instruction
    }

    //EXTRACTS OPCODE
    let opcode
    if (instruction.charAt(3) == 0) {
        opcode = instruction.charAt(4)
    } else {
        opcode = instruction.slice(-2)
    }

    //EXTRACTS PARAMETERS FROM INSTRUCTION
    let params = []
    params.push(instruction.charAt(2)) //first (C) parameter in instruction
    params.push(instruction.charAt(1)) //second (B) parameter in instruction
    params.push(instruction.charAt(0)) //third (A) parameter in instruction


    let values = []
    //OPCODE HANDLER
    if (opcode == 1) {

        params[0] == 0 ? values.push(pi[pi[pointer + 1]]) : values.push(pi[pointer + 1])
        params[1] == 0 ? values.push(pi[pi[pointer + 2]]) : values.push(pi[pointer + 2])
        pi[pi[pointer + 3]] = values[0] + values[1]
        pointer += 4

    } else if (opcode == 2) {

        params[0] == 0 ? values.push(pi[pi[pointer + 1]]) : values.push(pi[pointer + 1])
        params[1] == 0 ? values.push(pi[pi[pointer + 2]]) : values.push(pi[pointer + 2])
        pi[pi[pointer + 3]] = values[0] * values[1]
        pointer += 4

    } else if (opcode == 3) {

        //*************
        //SPECIAL INPUT
        //*************

        pi[pi[pointer + 1]] = specialInput
        pointer += 2

    } else if (opcode == 4) {

        params[0] == 0 ? console.log(pi[pi[pointer + 1]]) : console.log(pi[pointer + 1])
        pointer += 2

    } else if (opcode == 5) {

        params[0] == 0 ? values.push(pi[pi[pointer + 1]]) : values.push(pi[pointer + 1])
        params[1] == 0 ? values.push(pi[pi[pointer + 2]]) : values.push(pi[pointer + 2])

        if (values[0] != 0) {
            params[1] == 0 ? pointer = pi[pi[pointer + 2]] : pointer = pi[pointer + 2]
        } else {
            pointer += 3
        }

    } else if (opcode == 6) {

        params[0] == 0 ? values.push(pi[pi[pointer + 1]]) : values.push(pi[pointer + 1])
        params[1] == 0 ? values.push(pi[pi[pointer + 2]]) : values.push(pi[pointer + 2])

        if (values[0] == 0) {
            params[1] == 0 ? pointer = pi[pi[pointer + 2]] : pointer = pi[pointer + 2]
        } else {
            pointer += 3
        }

    } else if (opcode == 7) {

        params[0] == 0 ? values.push(pi[pi[pointer + 1]]) : values.push(pi[pointer + 1])
        params[1] == 0 ? values.push(pi[pi[pointer + 2]]) : values.push(pi[pointer + 2])

        if (values[0] < values[1]) {
            params[2] == 0 ? pi[pi[pointer + 3]] = 1 : pi[pointer + 3] = 1
        } else {
            params[2] == 0 ? pi[pi[pointer + 3]] = 0 : pi[pointer + 3] = 0
        }
        pointer += 4

    } else if (opcode == 8) {

        params[0] == 0 ? values.push(pi[pi[pointer + 1]]) : values.push(pi[pointer + 1])
        params[1] == 0 ? values.push(pi[pi[pointer + 2]]) : values.push(pi[pointer + 2])

        if (values[0] == values[1]) {
            params[2] == 0 ? pi[pi[pointer + 3]] = 1 : pi[pointer + 3] = 1
        } else {
            params[2] == 0 ? pi[pi[pointer + 3]] = 0 : pi[pointer + 3] = 0
        }
        pointer += 4

    } else if (opcode == 99) {
        console.log('opcode 99')
        run = false
    } else {
        console.log('run_error', pointer)
        run = false
    }
}
