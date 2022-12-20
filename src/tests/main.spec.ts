import { Range } from '../main'

describe('閉区間クラスのコンストラクタの確認をする', () => {
    test("下端点の取得をした", () => {
        expect(new Range(1, 2).rowerNumber).toBe(1)
    })

    test("上端点の取得をした", () => {
        expect(new Range(1, 2).upperNumber).toBe(2)
    })
})
