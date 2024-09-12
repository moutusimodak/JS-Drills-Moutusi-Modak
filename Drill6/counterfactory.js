function counterFactory() {
    // Return an object that has two methods called `increment` and `decrement`.
    // `increment` should increment a counter variable in closure scope and return it.
    // `decrement` should decrement the counter variable and return it.

    let counter = 0
    return {
        increment: function () {
            return `counter is incremented by ${++counter}`
        },
        decrement: function () {
            return `counter is incremented by ${--counter}`
        }
    }
}

const c1 = counterFactory()
const c2 = counterFactory()
console.log(c1.increment());
console.log(c1.increment());
console.log(c1.increment());
console.log(c1.decrement());
console.log(c1.decrement());
console.log(c1.decrement());
console.log(c1.decrement());
console.log(c1.decrement());
console.log(c1.increment());
console.log(c1.increment());
console.log(c2.increment());
