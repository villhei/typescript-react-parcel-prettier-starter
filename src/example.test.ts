function sum(a: number, b: number): number {
    return a + b
}

describe('Example test', () => {
    it('should call sum', () => {
        expect(sum(1, 2)).toEqual(3)
    })
})
