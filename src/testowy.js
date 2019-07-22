class testowy {
    generate(number) {
        const array = []
        for (let divide = 2; divide <= number; ++divide) {
            for (; 0 === number % divide; number /= divide) {
                array.push(divide);
            }
        }
        return array;
    }
    add(n) {
        if (n.includes('-')) {
            return 'negatives not allowed';
        }
        if (n === ('')) {
            return 0;
        }
        const arraySum = n.split(/[,\n]/);
        let sum = 0;
        for (let i = 0; i < arraySum.length; i++) {
            sum += parseInt(arraySum[i]);
        }
        return sum;
    }
}
module.exports = testowy;
//     generate(number){
//         const array=[];
//   while(number>1){
//                 let divide=2;

//                 while(divide<=number){
//                     while(0 === number% divide){
//     array.push(divide);
//     number /= divide;

//                     }

//                     divide++;
//                 }

//             } 
//        return array;}