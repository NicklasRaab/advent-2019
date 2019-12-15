const fs = require('fs')
const input  = fs.readFileSync('input.txt').toString().trim().split('')
let pixels = 25 * 6

let layers = []
let leftsplit = 0
let rightsplit = pixels

while (input.slice(leftsplit, rightsplit).length != 0) {
    let input_row = input.slice(leftsplit, rightsplit)
    let ordered_pixels = []

    for (let i = 0; i < 6; i++) {
        let row_of_pixels = input_row.slice(i*25, (i+1)*25)
        ordered_pixels.push(row_of_pixels)
    }

    let layer = {
        raw_input_row: input_row,
        pixels: ordered_pixels,
        number_of_zeros: input_row.filter( (pixel) => {return pixel == 0 ? pixel : false} ).length,
        number_of_twos: input_row.filter( (pixel) => {return pixel == 2 ? pixel : false} ).length,
        number_of_ones: input_row.filter( (pixel) => {return pixel == 1 ? pixel : false} ).length
    }

    leftsplit += pixels
    rightsplit += pixels

    layers.push(layer)
}

// assume that the first layer has the least amount of zeros
let layer_with_least_zeroes = layers[0]
for (let i = 0; i < layers.length; i++) {
    if (layers[i].number_of_zeros < layer_with_least_zeroes.number_of_zeros) {
        layer_with_least_zeroes = layers[i]
    }
}

// output part 1
console.log(layer_with_least_zeroes.number_of_ones * layer_with_least_zeroes.number_of_twos)



// 0 = black, 1 = white, 0 = transparent
// assume image is first layer
let image = layers[0].pixels

// processing all the layers of the image
for (let i = 1; i < layers.length; i++) {
    for (var j = 0; j < 6; j++) {
        for (var k = 0; k < 25; k++) {

            //if pixel in image is transparent, currently processed layer might have data
            if (image[j][k] == 2) {

                //if currently examined layer is transparent, nothing happens
                if (layers[i].pixels[j][k] == 2) {
                    continue
                } else {
                    image[j][k] = layers[i].pixels[j][k]
                }
            }
        }
    }
}

// drawing the image-array as a string for readability when console.log
let image_as_string = ''

for (let i = 0; i < 6; i++) {
    for (let j= 0; j < 25; j++) {

        if (image[i][j] == 0) {
            // black pixels as dots
            image_as_string += '.'
        } else {
            // white pixels as lines
            image_as_string += '|'
        }

    }

    //new row of the image except the last row
    if (i < 5) {
        image_as_string += '\n'
    }
}

// output part 2
console.log(image_as_string)
