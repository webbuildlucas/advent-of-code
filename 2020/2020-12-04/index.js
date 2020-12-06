const fs = require('fs')

const input = fs.readFileSync('./2020/2020-12-04/input.txt',"utf-8").split('\n');

let reqs = ['ecl', 'pid' ,'eyr', 'hcl', 'byr', 'iyr', 'hgt'],
eyecolors = ['amb' ,'blu', 'brn' ,'gry', 'grn', 'hzl', 'oth'],
passwords = [], breaks = [],
validpasses = 0, password

console.log(getpasses())

function getpasses(){

    breaks.push(0)
    for(let i=0;i<input.length;i++){
        if(input[i] === '\r'){
            breaks.push(i)
        }
    }

    for(let j = 0;j<breaks.length;j++){
        if(j+1 === breaks.length){
            passwords.push(input.splice(breaks[j]))
        }else{
            passwords.push(input.slice(breaks[j],breaks[j+1]))
        }
    }
    for(let k=0;k<passwords.length;k++){
        if(k===0){
            password = passwords[k]
        }else{
            let r = passwords[k].shift()
            password = passwords[k]
        }

        for(let m = 0;m<password.length;m++){
            if((k !== passwords.length) && (m !== password.length)){
            password[m] = password[m].slice(0,-1)
            }
        }
        checkpassword(password.join(' '))
    }
    return validpasses
}

function checkpassword(password){
    let foundreqs = [],
    splitted = password.split(' ');

    for(let i=0;i<splitted.length;i++){
        foundreqs.push(splitted[i].slice(0,3));
    }

    let checker = (arr, target) => target.every(v => arr.includes(v));

    if(checker(foundreqs,reqs)){
        if(extracheck(splitted)){
            validpasses += 1
        }
    }
}

function extracheck(password){
    let bday = password.filter((x) => x.startsWith("byr:")), 
    issue = password.filter((x) => x.startsWith("iyr:")),
    exp = password.filter((x) => x.startsWith("eyr:")),
    eye = password.filter((x) => x.startsWith("ecl:")),
    pid = password.filter((x) => x.startsWith("pid:")),
    hair = password.filter((x) => x.startsWith("hcl:")),
    h = password.filter((x) => x.startsWith("hgt:"));
 
    let expyear = parseInt(exp[0].slice(-4),10), 
    issueyear = parseInt(issue[0].slice(-4),10), 
    bdaynum = parseInt(bday[0].slice(-4),10),
    pi = pid[0].split(':'), haircolor = hair[0].split(':'),
    unit = h[0].slice(-2), eyecolor = eye[0].slice(-3), height = h[0].slice(4,-2);

    if((bdaynum >= 1920 && bdaynum <= 2002) && (issueyear >= 2010 && issueyear <= 2020)) {
        if((expyear >= 2020 && expyear <= 2030) && eyecolors.includes(eyecolor)){
            if(pi[1].length === 9 && /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(haircolor[1])){
                if((unit === 'cm' && (height >= 150 && height <= 193)) || (unit ==='in' && (height >= 59 && height <= 76))){
                    return true
                }            
            }
        }
    }   
}