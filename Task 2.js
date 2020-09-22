function checkNumb(numb){
    if (numb > 1 && numb < 1000){
        let result = `${numb} простое число`;
        for (let i = 2; i <= numb; i++){
            var del = numb % i;
            if (del === 0){
                result = `${numb} не является простым числом`;
                break;
            }
        }
        console.log(result);
    }else if (numb === 0 || numb === 1){
        console.log(`${numb} не является простым числом`);
    }else{
        console.log("Данные не верны");
    }
}

checkNumb(100)