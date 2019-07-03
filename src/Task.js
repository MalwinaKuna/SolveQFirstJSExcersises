class Task {
    isItHot(temp) {
        if (temp > 29) {
            return true;
        } else {
            return false;
        }
    }

    counter(number) {
        let count = 0;
        for (let i = 0; i < number; i++) {
            count += 3;
        }
        return count;
    }
    add(a, b) {
        return a + b;
    }
}
module.exports = Task;