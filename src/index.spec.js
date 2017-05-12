const add = (a, b) => a + b;

test('Add', () => {
  const result = add(1, 2);
  expect(result).toBe(3);
});
