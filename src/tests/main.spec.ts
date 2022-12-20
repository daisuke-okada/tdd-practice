import { ClosedRange } from '../main'

// 色々あったが共通化しないほうが良さそう
describe('閉区間クラスのコンストラクタの確認をする', () => {
    test("下端点を返す", () => {
        const closedRange = new ClosedRange(1, 2)
        expect(closedRange.lowerNumber).toBe(1)
    })

    test("上端点を返す", () => {
        const closedRange = new ClosedRange(1, 2)
        expect(closedRange.upperNumber).toBe(2)
    })
})

describe("上端と下端を配列形式にする場合", () => {
    test('上端点と下端点が文字列で出力される', () => {
        const closedRange = new ClosedRange(3, 7)
        expect(closedRange.getStringArray()).toBe("[3,7]")
    })
})
