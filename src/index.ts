console.log('TS is running');

export const addNumbers = (...numbers: number[]) => {
    return numbers.reduce((acc, next) => {
        acc += next;
        return acc;
    }, 0)
}

console.log(addNumbers(1, 3, 5))