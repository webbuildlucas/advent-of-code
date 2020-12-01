const fs = require('fs');

// get the input from the file
const input = fs.readFileSync("./2020/2020-12-01/input.txt", "utf-8").split('\n').map(x=>+x)
const endnumber = 2020

// log the answer
console.log(`Answer part 1: ${get2numbers(input,endnumber)}\nAnswer part 2: ${get3numbers(input,endnumber)}`)

// get the 2 numbers that sum to the number required
function get2numbers(input, endnumber){
    for(const value1 in input){
        for(const value2 in input){
            if(input[value1] + input[value2] === endnumber){
                return input[value1] * input[value2] 
            }   
        }
    }
}

// get the 3 numbers that sum to the number required
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