import { parseNumberWithLetterScale } from "../../utility/parse"

describe('parseNumberWithLetterScale', () => {
    it('returns parsed number for valid values', () => {
        expect(parseNumberWithLetterScale("5.4")).toEqual(5.4)
        expect(parseNumberWithLetterScale("200K")).toEqual(200000)
        expect(parseNumberWithLetterScale("5M")).toEqual(5000000)
        expect(parseNumberWithLetterScale("7.6B")).toEqual(7600000000)
    })

    it('returns null for invalid values', () => {
        expect(parseNumberWithLetterScale("")).toBeNull()
        expect(parseNumberWithLetterScale("4.3F")).toBeNull()
        expect(parseNumberWithLetterScale("M")).toBeNull()
    })
})