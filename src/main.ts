export class ClosedRange {
    lowerNumber: number;
    upperNumber: number;

    constructor(lowerNumber: number, upperNumber: number) {
        this.lowerNumber = lowerNumber;
        this.upperNumber = upperNumber;
    }

    getRangeArray() {
        return `[${this.lowerNumber},${this.upperNumber}]`
    }

}

