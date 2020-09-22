
function entNumb(one, two){
    let rep = one;

    console.log(rep);

    let doublFunc = setInterval(function(){

        if (rep < two){
            rep++;
            console.log(rep);

        }else{
            clearInterval(doublFunc);
        }
    }, 1000);
}

entNumb(1, 5);