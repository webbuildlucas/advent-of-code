const fs = require('fs');

// get the input from the file
const input = fs.readFileSync("./2020/2020-12-02/input.txt", "utf-8").split('\n');
let correctpasswords = 0;

// log the answer. For task 2 change true to false
console.log(`Answer part 1: ${pass(input, true)}`)

// get the amount of correct passwords
function pass(input,task1){

    for(let i = 0;i < input.length; i++){
        let string = (i+1 === input.length) ? (input[i].split(' ')) : (input[i].slice(0,-1).split(' '));
        
        let limits = string[0].split('-');
        let letter = string[1].slice(0, 1);
        let endstring = string[2].split('');

        if(task1){
            let matches = endstring.filter((x) => (x === letter)).length;

            if(limits[0] <= matches && matches <= limits[1]){
                correctpasswords += 1;
            }
        }else{
            let firstindex = endstring[parseInt(limits[0],10) - 1]  === letter;
            let secondindex = endstring[parseInt(limits[1],10) - 1] === letter;

            if( (firstindex && !secondindex) || (!firstindex && secondindex)){
                correctpasswords += 1
            }
        }      
    }
    return correctpasswords;
}