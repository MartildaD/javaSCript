/*const s1 = 70;
const s2 = 85;
const s3 = 92;
console.log(s1 + s2 + s3);


const scores = [70, 85, 92];
console.log(scores [0]);
console.log(scores [2]);
console.log(scores.length);
console.log(scores [3]);*/

/*
const queue = ["Ada", "Tunde"];
queue[queue.length] = "Zainab";
console.log(queue);
console.log(queue.);*/


/*
const queue = ["Ada", "Tunde"];
queue.push("Zainab");
console.log(queue.shift());
queue.unshift("Ife");
console.log(queue.pop());
console.log(queue);


const names = ["Ada", "Tunde", "Zainab"];
console.log(names.includes("Tunde"));
console.log(names.indexOf("Zainab"));
console.log(names.indexOf("Chidi"));
console.log(names.slice(0, 2));
console.log(names.concat(["Ife"]))
console.log(names.slice(-2, 2));



const a = ["Ada", "Tunde"];
const copy = [...a];
copy.push("Zainab");
console.log(a);
console.log(copy);
const same = a;
console.log(same === a, copy === a);*/


/*const scores = [70, 85, 92];
for (let i = 0; i < scores.length; i++){
console.log(scores[i] + 1);
}
for (const score of scores){
console.log(score * 2);
}*/




function range(start, end) {
    const result = [];
    for (let n = start; n <= end; n++) {
        result.push(n);
    }
    return result;
} 

function sum(...numbers) {
    let total = 0;
    for (const n of numbers) {
        total += n;
    }
    return total;
}
console.log(sum(range(1,10)));








/*let sum = 0
for(let index = 1; index <= 10; index++){
    sum += index
}
console.log(sum)

*/





















