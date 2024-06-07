function createCounter() {
    let count = 0;
    function increment() {
        return ++count
    }
    function decerement() {
        return --count;
    }
    function getCount() {
        return count
    }
    return {
        increment,decerement,getCount
    }
}
const counter = createCounter();
console.log(counter.increment)
console.log(counter.increment)
console.log(counter.getCount)