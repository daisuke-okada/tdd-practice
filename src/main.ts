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

    isIncludeNumber(num: number) {
        return this.isLowerUpperNumber(num) && this.isUpperLowerNumber(num)
    }
    isLowerUpperNumber(num: number): boolean {
        return this.upperNumber >= num;
    }

    isUpperLowerNumber(num: number): boolean {
        return this.lowerNumber <= num;
    }
}

