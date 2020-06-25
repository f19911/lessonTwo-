let num = +prompt('Угадай число от 1 до 10');
let randomNum = Math.random() * (10 - 1) + 1;

randomNum = Math.floor(randomNum);

for (i = 0; i => randomNum; i++) {

    if (num > 0 && num < 11) {

        if (num == randomNum) {

            console.log('Ты угадал!');
            console.log('Случайное число = ' + randomNum);
            break;

        } else {
            num = +prompt('попробуй снова');
        }
    } else {
        console.log('Напиши число от 1 до 10');
        break;
    }
}








