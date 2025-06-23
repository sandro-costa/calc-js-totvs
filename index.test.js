const { sum } = require('./index');

test('soma 1 e 2 e espera 3', () => {
    expect(sum(1, 2)).toBe(3);
});