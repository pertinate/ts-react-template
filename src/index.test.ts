import { addNumbers } from './'

test('addNumber', () => {
    expect(addNumbers(1, 2, 3, 4, 5)).toEqual(15)
})