// let fruits = ["Яблоко", "Апельсин", "Слива"];
// console.log(fruits[2]);

// fruits.push("bananas");
// console.log(fruits);

// const test = fruits.unshift("bananas");
// console.log("test:", test);
// console.log(fruits);

// const arr1 = fruits.shift();
// console.log("arr1:", arr1);
// console.log(fruits);

// const arr2 = fruits.pop();
// console.log("arr2:", arr2);
// console.log(fruits);

// const strFromArr = fruits.join(", ");
// console.log("strFromArr:", strFromArr);

// const index = fruits.indexOf("Яблоко");
// console.log("indexApple:", index);

// const slice = fruits.slice(-2);
// console.log("slice:", slice);

// const arr = [
//     "сдавайтесь",
//     "сдавайтесь",
//     "Не сдавайтесь",
//     "не сдавайтесь",
//     "никогда, черт вас подери не сдавайтесь",
//     "при первой же трудности всегда сдавайтесь",
// ];

// const str1 = arr.slice(2, 5).join(" ");
// console.log("str1:", str1);

// // let i = 0;
// // while (i < fruits.length) {
// //     console.log(fruits[i]);
// //     i++;
// // }

// // for (let i = 0; i < fruits.length; i++) {
// //     console.log(fruits[i]);
// // }

// // fruits.forEach((element) => {
// //     console.log(element);
// // });

// // const mappedFruits = fruits.map(el => el);
// // console.log("mappedFruits:", mappedFruits);

// const users = [
//     {
//         id: 1,
//         name: "John",
//         surName: "Doe",
//         address: "123 Main St",
//     },
//     {
//         id: 2,
//         name: "Jane",
//         surName: "Smith",
//         address: "456 Elm St",
//     },
//     {
//         id: 3,
//         name: "Tom",
//         surName: "Johnson",
//         address: "789 Oak St",
//     },
// ];

// // users.map((el) => console.log(el.address));

// // users.map(el => {
// //     el.id >= 2 ? console.log(el) : "";
// // });

// const re = users.filter((el) => el.id <= 2);
// console.log(re);

// users.map((el) => {
//     el.id === 2 ? console.log({ ...el, name: "Ansar" }) : el;
// });

// const tasks = [
//     { id: 1, title: "HTML&CSS", isDone: true },
//     { id: 2, title: "JS", isDone: true },
//     { id: 3, title: "ReactJS", isDone: false },
// ];

// const newTasks = tasks.map((el) =>
//     el.id === 2 ? { ...el, title: "I like JS" } : el
// );
// console.log("newTasks:", newTasks);

// const numbers = [
//     [1, 2, 3, 4, 5],
//     [10, 20, 30, 40, 50],
//     [100, 200, 300, 400, 500],
// ];

// numbers.map(el => el.map(el => console.log(el)));
