const arr = [0, 25, 5, 24, 8, 4, "str", NaN, null];

function sort(numb) {
    let even = 0;
    let odd = 0;
    let zero = 0;

    for (let i = 0; i < numb.length; i++) {
        if (typeof numb[i] === "number" && !isNaN(numb[i])) {
            if (numb[i] === 0) {
                zero += 1;
            } else if (numb[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }

    console.log('Четных элементов', even);
    console.log('Нечетных элементов', odd);
    console.log('Нулей', zero);
}

sort(arr)