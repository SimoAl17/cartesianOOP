class Range{
    constructor(start, end, step){
        this.start = start;
        this.end = end;
        this.step = step;
    }

    [Symbol.iterator](){
        const iterator = {};
        let actualValue = this.start
        iterator.next = () => {
            const returnObject = {};
            if (actualValue < this.end) {
                returnObject.value = actualValue;
                actualValue = actualValue + this.step;
                returnObject.done = false;
            } else {
                returnObject.done = true;
            }
            return returnObject;
        }
        return iterator;
    }
}