const fs = require('fs')

const input = fs.readFileSync('./2020/2020-12-03/input.txt',"utf-8").split('\n');
let trees = 0, grid = [],
x = 0, y = 0, dx = 3, dy = 1;

// log the answer
console.log(`Total trees: ${TreeOnPath(input, dx, dy)}`)

function TreeOnPath(input, dx, dy){ 
    
    for(let i = 0;i < input.length; i++){
        let string = (i+1 === input.length) ? (input[i].split(' ')) : (input[i].slice(0,-1).split(' '));
        grid.push(string);
    }

    let ymax = grid[0].toString().length;
 
    for(let i = 0;i < grid.length; i++){

        x += dx;
        y += dy;

        if(x >= ymax)
            x -= ymax;
        
        if(spotvalue(x, y, grid))
            trees += 1;
        
    }
    return trees
}

function spotvalue(x, y, grid){
   
    if(grid[y] != undefined){

        let array = grid[y].toString().split('');
        let spot = array[x].toString();

        if(spot === '#')
             return true 
        else
             return false
    }
}