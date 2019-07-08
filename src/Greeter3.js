class Greeter3 {

    constructor(date) {
        this.date = date;
    }

    greeter(name) {
        let greet = 'Hello ';
        let hours = this.date.getHours();
        name.trim();
        name = name.charAt(0).toUpperCase() + name.slice(1);
        if (hours >= 6 && hours <= 12) {
            greet = 'Good morning ';
        } else if (hours < 22 && hours >= 18) {
            greet = 'Good evening ';

        } else if (hours >= 22 && hours < 24 || hours > 0 && hours < 6) {
            greet = 'Good night ';
        }

        return greet += name;

    }

}
module.exports = Greeter3;