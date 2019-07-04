class PrimeFactos {
    generate(number) {
        
        let tab=[];

        for(let divide=2; divide <=number; ++divide){
            for(;0=== number% divide;number/=divide){
                tab.push(divide);
            }
        }
        return tab;
    }
}
module.exports = PrimeFactos;