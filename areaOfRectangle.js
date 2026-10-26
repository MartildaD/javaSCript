function area(w, h) {
    return(w * h);
}
const total = area(4, 5);
console.log(total);



function even(x) {
    return x % 2 == 0;
}
console.log(even(50));
console.log(even(75));




function smallernumber(x, y) 
    if (x < y) 
    return x;

    return y;
const small = smallernumber(0, 10);
console.log(small);

 const d1 = x => x * 2;
console.log(d1(4));


function greet(name = "friend") {
    console.log("hello, " + name + "!");
}

greet(name = "Enny");
greet("Ada", "extra", "ignored");

function sum(...numbers) {
    let total = 0;
    for (const n of numbers) total += n;
    return total;
}
console.log(sum(1,2,3,4,8,9,887,654,112,908));

function twice(action) {
    action();
    action();
}

twice(() => console.log("Hello"));
twice(() => console.log("Bye"));


(function () {
    const secret = "only in here";
    console.log("ran once:", secret);
})();
console.log(typeof secret);



































