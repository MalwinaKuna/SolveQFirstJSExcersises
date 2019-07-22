class StringCalculator {
    add(number) {
        if (number.includes('-')) {
            return 'negatives not allowed';
        }
        if (number === ('')) {
            return 0;
        }
        const array = number.split(/[,\n]/);
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += parseInt(array[i]);
        }
        return sum;
    }
}
module.exports = StringCalculator;

// class StringCalculator {

//     add(a = '') {
//         if (a === '') {
//             return 0;
//         }

//         let sum = 0;
//         if (a.includes('-')) {
//             return 'negatives not allowed';
//         }

//         const tab = a.split(/[,\n]/);
//         for (let i = 0; i < tab.length; i++) {
//             sum += parseInt(tab[i]);

//         }

//         return sum;
//     }

// }

// module.exports = StringCalculator;