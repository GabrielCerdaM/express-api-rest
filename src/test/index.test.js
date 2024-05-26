describe.skip('Bloque de pruebas', () => {
    it('prueba 1', () => {
        const result = () => {
            return true
        }
        expect(result()).toBe(true);
    })
})


test.skip('Test', () => {
    expect(true).toBe(true)
    // assert.equal(1, 2)
})