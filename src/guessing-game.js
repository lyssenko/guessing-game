class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.a = min;
        this.b = max;
    }

    guess() {
        this.c = Math.ceil((this.b + this.a) / 2);
        return this.c;
    }

    lower() {
        this.b = this.c;
    }

    greater() {
        this.a = this.c;
    }
}

module.exports = GuessingGame;