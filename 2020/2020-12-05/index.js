const fs = require('fs');

const input = fs.readFileSync('./2020/2020-12-05/input.txt', "utf-8").split(/\r?\n/);
const passes = [], rows = 128, columns = 8;

console.log(`Highest seat ID: ${getseats(input, rows, columns)}`);

function getseats(input, rows, columns){
 
    for(let i = 0; i < input.length; i++){

        let rownumber = Seat(input[i].slice(0, 7), rows, 'B'),
        column = Seat(input[i].slice(7, 10), columns, 'R'),
        seat = {
            id: (rownumber * 8) + column,
            row: rownumber,
            column: column
        };
      
        passes.push(seat);
    }

    for(let i = 0; i < columns; i++){
        
        let foundcolumns = passes.filter(x => x.column === i);

        for(let j = 0;j < rows; j++){

            if(!foundcolumns.find(x => x.row === j)){

                // 20 is a save margin
                if(j > 20 && j < (rows - 20)){
                    console.log(`Own seat ID: ${(j * 8) + i}`);
                }
            }
        }
    }
   
    let sorted = passes.sort((a, b) => a.id < b.id ? -1 : (a.id > b.id ? 1 : 0));
    return sorted[sorted.length - 1].id
}

function Seat(id, data, filter){

    const limits = [0, data];

    for(let i = 0; i < id.length; i++){
        
        (id[i] === filter) ? (limits[0] += (limits[1] - limits[0]) / 2) 
        : (limits[1] -= (limits[1] - limits[0]) / 2);
        
        if((i + 1) === id.length){

            limits[1] -= 1
            return (id[i] === filter) ? limits[1] : limits[0] 
        }
    }
}


