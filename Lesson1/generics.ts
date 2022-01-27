class logAgeClass<T extends number | string> {

    constructor(protected age: T) {

    }

    log() {
        console.log(this.age);
    }
}

const logger = new logAgeClass('Young');

logger.log();