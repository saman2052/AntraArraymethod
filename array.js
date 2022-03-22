const arr = [1,2,3,4,5,6,]
const alphabet = ["f", "a","c", "v", "z"]

descend = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descend); // [6, 5, 4, 3, 2, 1]

ascend = alphabet.sort((a, b) => a > b ? -1 : 1);
console.log(ascend); // ["a", "c", "f", "v", "z"]