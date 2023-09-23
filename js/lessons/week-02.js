// function showMe(value, number) {
//    console.log(value, number);
// };

// showMe("Hellow", 1223);

// function showMe(val = "Hellow Yullia") {
//     console.log(val);
// }

// showMe("Hellow Jenya");

// const showMe2 = (val = "Hellow Yullia") => {
//     console.log(val);
// };

// showMe2();

// const sum = (numb1, numb2) => {
//     console.log(numb1 + numb2);
// };

// sum(100, 200);

// const sum2 = (numb1, numb2) => console.log(numb1 + numb2);

// const sum3 = (numb2) => console.log(numb2);

// sum3(100);

// const isPositive = (numb) => {
//     if (numb >= 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// };

// isPositive(5);

// const giveMeResult = (day) => {
//     if (day === "Saturday" || day === "Sunday") {
//         dayOfWeek = "dayOff";
//     } else {
//         dayOfWeek = "weekday";
//     }

//     switch (dayOfWeek) {
//         case "weekday":
//             console.log("Будний день");
//             break;
//         case "dayOff":
//             console.log("Выходной день");
//             break;
//         default:
//             console.log("Некоректное значение дня недели");
//     }
// };

// giveMeResult("Sunday");

// const isInRange = (numb = 13) => {
//     switch (true) {
//         case numb >= 10 && numb <= 20:
//             console.log(numb, true);
//             break;
//         case numb === 0 || numb === 100:
//             console.log(numb, true);
//             break;
//         default:
//             console.log(false)
//     }
// };

// isInRange();

// const user = {
//     name: "Igor",
//     age: 30,
// };

// const user2 = { ...user, name: "Ansar", lastName: "Khubiev" };

// const user2 = user;

// console.log(user2);
// console.log(user);

// user.name = "Ansar";

// console.log(user2);

// let prep = {
//     name: "Igor",
//     sizes: {
//         height: 177,
//         weight: 80,
//     },
// };

// let prep2 = { ...prep, sizes: { ...prep.sizes } };

// prep2.name = "Yulia";

// prep2.sizes.weight = 50;
// console.log("prep2:", prep2);
// console.log("prep:", prep);

// const prep = {
//     name: "Igor",
//     sizes: {
//         height: 177,
//         weight: 80,
//     }
// };

// const copyPred = (obj) => {
//     return { ...obj, sizes: {...prep.sizes}, isMarried: true };
// };

// console.log(copyPred(prep));

// prep.sizes.isMarried = true;
// console.log(prep);
// console.log(copyPred());
