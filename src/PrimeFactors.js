class PrimeFactors {
    generate(number){
        const array=[];

        while(number >1){
            let divide=2;

            while(divide<=number){
                while(0 === number % divide) {
                    array.push(divide);
                    number /= divide;

                }
            }
            divide++;
        }
    return array;}

}
module.exports=PrimeFactors;









// var tab = [];

// while (number > 1) {
//     var divide = 2;
//     while (divide <= number) {
//         while (0 === number % divide) {
//             tab.push(divide);
//             number /= divide;
//         }
//         divide++;
//     }
// }
// return tab;
// let tab = [];

// for (let divide = 2; divide <= number; divide++) {
//     for (; 0 === number % divide; number /= divide) {
//         tab.push(divide);
//     }
// }
// return tab;