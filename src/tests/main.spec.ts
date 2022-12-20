import { ClosedRange } from '../main'

describe('閉区間クラスのコンストラクタの確認をする', () => {
    test("下端点を渡して、下端点を渡すようにする", () => {
        expect(new ClosedRange(1, 2).rowerNumber).toBe(1)
    })

    test("上端点の取得をした", () => {
        expect(new ClosedRange(1, 2).upperNumber).toBe(2)
    })
})
