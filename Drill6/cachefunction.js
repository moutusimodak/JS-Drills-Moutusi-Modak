function cacheFunction(cb) {
    const cache = {};
    return function(a, b) {
      if (a in cache) {
        return cache[a];
      }
  
      const result = cb(a, b);
      cache[a] = result;
  
      return result;
    };
  }

const add = (a, b) =>{
  console.log('not in cache, so res is-...');
    return a + b;
}
const res = cacheFunction(add);

console.log(res(2, 3)); 
console.log(res(2, 3)); 

console.log(res(8, 3)); 