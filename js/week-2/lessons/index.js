// function showMe(value, number) {
//    console.log(value, number);
// };

// showMe("Hellow", 1223);

function showMe(val = "Hellow Yullia") {
    console.log(val);
}

showMe("Hellow Jenya");

const showMe2 = (val = "Hellow Yullia") => {
    console.log(val);
};

showMe2();

const sum = (numb1, numb2) => {
    console.log(numb1 + numb2);
};

sum(100, 200);

const sum2 = (numb1, numb2) => console.log(numb1 + numb2);

const sum3 = numb2 => console.log(numb2);

sum3(100);


const isPositive = numb => {
    if (numb >= 0) {
        console.log(true);
    } else {
        console.log(false);
    };
};

isPositive(5);

