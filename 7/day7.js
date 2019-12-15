const IntcodeComputer = require('./intcode_computer')
const Amplifier = require('./amplifier')
const AmplifierSeries = require('./amplifier_series')

const puzzleInput = [3,8,1001,8,10,8,105,1,0,0,21,42,55,64,85,98,179,260,341,422,99999,3,9,101,2,9,9,102,5,9,9,1001,9,2,9,1002,9,5,9,4,9,99,3,9,1001,9,5,9,1002,9,4,9,4,9,99,3,9,101,3,9,9,4,9,99,3,9,1002,9,4,9,101,3,9,9,102,5,9,9,101,4,9,9,4,9,99,3,9,1002,9,3,9,1001,9,3,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,3,9,101,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,99,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,1,9,4,9,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,99]


// test code part 1
// should ouput: 43210
// const pi = [3,15,3,16,1002,16,10,16,1,16,15,15,4,15,99,0,0]
// let sequences = [[4,3,2,1,0]]

// should ouput: 54321
// const pi = [3,23,3,24,1002,24,10,24,1002,23,-1,23,101,5,23,23,1,24,23,23,4,23,99,0,0]
// let sequences = [[0,1,2,3,4]]

// should ouput: 65210
// const pi = [3,31,3,32,1002,32,10,32,1001,31,-2,31,1007,31,0,33,1002,33,7,33,1,33,31,31,1,32,31,31,4,31,99,0,0,0]
// let sequences = [[1,0,4,3,2]]


// test code part 2
// should output: 139629729
// const pi = [3,26,1001,26,-4,26,3,27,1002,27,2,27,1,27,26,27,4,27,1001,28,-1,28,1005,28,6,99,0,0,5]
// let feedback_sequences = [[9,8,7,6,5]]

//should output: 18216
const pi = [3,52,1001,52,-5,52,3,53,1,52,56,54,1007,54,5,55,1005,55,26,1001,54,-5,54,1105,1,12,1,53,54,53,1008,54,0,55,1001,55,1,55,2,53,55,53,4,53,1001,56,-1,56,1005,56,6,99,0,0,0,0,10]
let feedback_sequences = [[9,7,8,5,6]]

// // https://stackoverflow.com/questions/37579994/generate-permutations-of-javascript-array
// // function for creating all possible permutations of an array
// function perm(xs) {
//     let ret = []
//
//     for (let i = 0; i < xs.length; i = i + 1) {
//         let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)))
//
//         if(!rest.length) {
//             ret.push([xs[i]])
//         } else {
//             for(let j = 0; j < rest.length; j = j + 1) {
//                 ret.push([xs[i]].concat(rest[j]))
//             }
//         }
//     }
//     return ret
// }
// let sequences = perm([0,1,2,3,4])
// let feedback_sequences = perm([5,6,7,8,9])
// // end of copy


// //part 1
// let amplifier_series = []
// for (var i = 0; i < sequences.length; i++) {
//
//     let series = new AmplifierSeries(sequences[i])
//
//     for (var j = 0; j < sequences[i].length; j++) {
//         let intcode_computer = new IntcodeComputer(puzzleInput)
//         let amplifier = new Amplifier(intcode_computer)
//         series.addAmplifier(amplifier)
//     }
//
//     series.run()
//     amplifier_series.push(series)
// }
//
// let highest_signal = 0
// for (let i = 0; i < amplifier_series.length; i++) {
//     if (amplifier_series[i].highest_signal > highest_signal) {
//         highest_signal = amplifier_series[i].highest_signal
//     }
// }
// console.log('highest signal', highest_signal)
// //end of part 1




//part 2
let amplifier_series = []
for (var i = 0; i < feedback_sequences.length; i++) {

    let series = new AmplifierSeries(feedback_sequences[i])

    for (var j = 0; j < 5; j++) {
        let intcode_computer = new IntcodeComputer(pi)
        let amplifier = new Amplifier(intcode_computer)
        series.addAmplifier(amplifier)
    }

    series.activate_feedback_loop(true)
    series.run_feedback_loop()
    amplifier_series.push(series)
}

let highest_signal = 0
for (let i = 0; i < amplifier_series.length; i++) {
    if (amplifier_series[i].highest_signal > highest_signal) {
        highest_signal = amplifier_series[i].highest_signal
    }
}
console.log('\n\nHighest signal', highest_signal)
//
//end of part 2
