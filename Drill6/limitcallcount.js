function limitFunctionCallCount(callback, n) {
    if (typeof callback !== 'function' || typeof n !== 'number' || n <= 0) {
        return null;
    }
    let count = 0;
    return function () {
        if (count < n) {
            callback();
            count++;
        }
    }

}

const limitedFunc = limitFunctionCallCount(() => console.log("Hello good morning"), 2);
if (limitedFunc) {

    limitedFunc();
    limitedFunc();
    limitedFunc();
    limitedFunc();
    limitedFunc();
}
   





