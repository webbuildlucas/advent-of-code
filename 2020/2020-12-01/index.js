const fs = require('fs');

// get the input from the file
const input = fs.readFileSync("./2020/2020-12-01/input.txt", "utf-8").split('\n').map(x=>+x)
const endnumber = 2020

// get the answer
const part1 = get2numbers(input,endnumber)
const part2 = get3numbers(input,endnumber)
console.log(`Answer part 1: ${part1}\nAnswer part 2: ${part2}`)

// get the 2 numbers that sum endnumber
function get2numbers(input, endnumber){
    for(const value1 in input){
        for(const value2 in input){
            if(input[value1] + input[value2] === endnumber){
                return input[value1] * input[value2] 
            }   
        }
    }
}

// get the 3 numbers that sum to 2020
function get3numbers(input, endnumber){
    for(const value1 in input){
        for(const value2 in input){
            for(const value3 in input){
                if(input[value1] + input[value2] + input[value3] === endnumber){
                    return input[value1] * input[value2] * input[value3]
                }
            }
        }
    }
}