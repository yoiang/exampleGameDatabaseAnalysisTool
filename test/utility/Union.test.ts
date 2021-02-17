import { InvalidUnionValueError, parseUnionFactory, parseUnionOrNullFactory } from "../../utility/Union"

export const ScopeValues = ["Jam/Prototype", "Indie", "AA", "AAA"] as const
export type Scope = typeof ScopeValues[number]

describe('parseUnionFactory', () => {
    it('resolves with matched value for valid value', () => {
        const parseScope = parseUnionFactory(ScopeValues)
        return Promise.all(
            ScopeValues.map(value => {
                return parseScope(value as string).then((test) => {
                    expect(test).toEqual(value)
                })
            }) 
        )
    })

    it('rejects with InvalidUnionValueError', () => {
        const parseScope = parseUnionFactory(ScopeValues)
        expect.assertions(1)
        return parseScope('lallalalala').catch(error => {
            expect(error.message).toMatch(InvalidUnionValueError.Message)
        })
    })
})

describe('parseUnionOrNullFactory', () => {
    it('returns matched value for valid value', () => {
        const parseScopeOrNull = parseUnionOrNullFactory(ScopeValues)
        ScopeValues.forEach(value => {
            expect(parseScopeOrNull(value as string)).toEqual(value)
        })
    })

    it('returns null for invalid value', () => {
        const parseScopeOrNull = parseUnionOrNullFactory(ScopeValues)
        expect(parseScopeOrNull('lallalalala')).toBeNull()
    })
})
