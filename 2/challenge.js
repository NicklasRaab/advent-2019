const part_one = (noun, verb) => {
    let intcode = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,1,9,19,1,13,19,23,2,23,9,27,1,6,27,31,2,10,31,35,1,6,35,39,2,9,39,43,1,5,43,47,2,47,13,51,2,51,10,55,1,55,5,59,1,59,9,63,1,63,9,67,2,6,67,71,1,5,71,75,1,75,6,79,1,6,79,83,1,83,9,87,2,87,10,91,2,91,10,95,1,95,5,99,1,99,13,103,2,103,9,107,1,6,107,111,1,111,5,115,1,115,2,119,1,5,119,0,99,2,0,14,0]
    intcode[1] = noun
    intcode[2] = verb

    for (let i = 0; i < intcode.length; i+=4) {
        if (intcode[i] == 1) {
            intcode[intcode[i + 3]] = intcode[intcode[i + 1]] + intcode[intcode[i + 2]]
        } else if (intcode[i] == 2) {
            intcode[intcode[i + 3]] = intcode[intcode[i + 1]] * intcode[intcode[i + 2]]
        } else if (intcode[i] == 99) {
            return intcode[0]
        } else {
            console.log('Error', array)
            return false
        }
    }
}

const part_two = (output) => {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            if (part_one(i,j) === output) {
                return 100 * i + j
            }
        }
    }
}

console.log(part_one(12,2))
console.log(part_two(19690720))
