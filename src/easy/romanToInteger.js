/**
 * Consider n the length of the roman number
 * 
 * runtime O(n)
 * space complexity O(n)
 * 
 * 
 */
const SUCCESSORS = {
    I: {
        V: 4,
        X: 9
    },
    X: {
        L: 40,
        C: 90
    },
    C: {
        D: 400,
        M:900
    }
}

const NUM_MAP = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000  
}
var romanToInt = function(s) {
    const inputArray = s.split('');
    let i = 0;
    let accumulator = 0;
    let romanNum, nextRomanNum, currentNum;
    while(i < inputArray.length) {
        romanNum = inputArray[i];
        nextRomanNum = i != inputArray.length-1 && inputArray[i+1];
        if(SUCCESSORS[romanNum] && SUCCESSORS[romanNum][nextRomanNum]) {
            currentNum = SUCCESSORS[romanNum] && SUCCESSORS[romanNum][nextRomanNum];
            i+=2;
        }
        else {
            currentNum  = NUM_MAP[romanNum];
            i++;
        }
        accumulator +=  currentNum;
    }
    return accumulator;
};