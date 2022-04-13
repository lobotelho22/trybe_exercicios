const sum = (...nums) => nums.reduce ((acc, num) => acc + num);

//const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

const numArray = (a=0, b=1) => {
    const arrayNum = [a];
    for (a; a < b; a += 1){ arrayNum.push(a + 1);};
    return arrayNum;
} 

console.log(sum(...numArray(1,10)));