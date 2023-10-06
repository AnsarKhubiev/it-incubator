// let dayOfWeek = "Sunday"

// switch (true) {
//    case dayOfWeek === "Saturday" || dayOfWeek === "Sunday":
//       console.log("Выходной день");
//       break;
//    default:
//       console.log("Будний день");
// }

// toJadenCase = function () {
//     return str.split(" ").map((el) => {
//         return el.charAt(0).toUpperCase() + el.slice(1);
//     }).join(" ");
// };

// console.log(toJadenCase(str));

// String.prototype.toJadenCase = function () {
//     return this.split(" ").map((el) => {
//         return el.charAt(0).toUpperCase() + el.slice(1);
//     }).join(" ");
// };

// const str = "How can mirrors be real if our eyes aren't real";
// arr = str.split(" ")
// console.log(arr); //['How', 'can', 'mirrors', 'be', 'real', 'if', 'our', 'eyes', "aren't", 'real']

const arr = [1,2,"aasf","1","123",123];
typeof arr;

function filter_list(arr) {
    return arr.filter((el) => typeof(el) === 'number');
}
console.log(filter_list(arr));
