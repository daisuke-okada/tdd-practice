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
