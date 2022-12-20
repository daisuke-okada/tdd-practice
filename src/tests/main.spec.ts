import { ClosedRange } from '../main'

// 色々あったが共通化しないほうが良さそう
describe('上端点と下端点が正しく設定されてる場合', () => {
    describe("上端点と下端点が異なる数値の場合", () => {
        test("下端点を返す", () => {
            const closedRange = new ClosedRange(1, 2)
            expect(closedRange.lowerNumber).toBe(1)
        })

        test("上端点を返す", () => {
            const closedRange = new ClosedRange(1, 2)
            expect(closedRange.upperNumber).toBe(2)
        })
        })
    describe("上端点と下端点が同じ数値の場合", () => {
        test("どちらも3の場合上端点も下端点も3を返す", () => {
            const closedRange = new ClosedRange(3, 3)
            expect(closedRange.lowerNumber).toBe(3)
            expect(closedRange.upperNumber).toBe(3)
        })
    })
})

describe("上端と下端を配列形式にする場合", () => {
    test('上端点と下端点が"[3,7]"で出力される', () => {
        const closedRange = new ClosedRange(3, 7)
        expect(closedRange.getRangeArray()).toBe("[3,7]")
    })
})

describe("指定した整数が閉区間に含まれているかを判定する", () => {
    test('"[3,7]"に含まれる4の場合trueを返すこと', () => {
        const closedRange = new ClosedRange(3, 7)
        expect(closedRange.isIncludeNumber(4)).toBe(true)
    })

    test('"[3,7]"に含まれない2の場合falseを返すこと', () => {
        const closedRange = new ClosedRange(3, 7)
        expect(closedRange.isIncludeNumber(2)).toBe(false)
    })
})
