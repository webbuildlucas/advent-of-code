const fs = require('fs');

const input = fs.readFileSync('./2020/2020-12-06/input.txt', "utf-8").split(/\n\s*\n/);
const answers = []
let output = 0

console.log(answer(input, true))

function answer(input, task1){
    return (task1) ?  part1(input) : part2(input) 
}

function part1(input){
  
    for(let i = 0; i < input.length; i++){

        let parsedAns = input[i].split(/[\r\n]+/), groupanswer = []

        for(let j = 0; j < parsedAns.length; j++){
            if(parsedAns[j])
                groupanswer.push(parsedAns[j].split(''))  
        }

        answers.push(groupanswer.flat().filter((item, index) => groupanswer.flat().indexOf(item) === index))  
    }

    for(let i = 0; i < answers.length; i++){
        output += answers[i].length
    }

    return output
}

function part2(input){
  
    const totalgroups = input.filter(x => x);

    for (let i = 0; i < totalgroups.length; i++) {

        const group = groups[i];
        const matches = new Set([...group.replace(/[\r\n]/g, '')]);
  
        let filter = [...matches].filter(v => group.split('\n').filter(x => x).every(z => z.includes(v)))

        output += filter.length;
    }
    
    return output 
}