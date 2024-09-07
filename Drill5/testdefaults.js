const {defaults} = require('./defaults')
const testObject = { name: "Bruce Wayne", age: 36, location: "Gotham" };
const defaultProps = { name: "moutusi", hobby:"reading story books" };
console.log("Defaults:", defaults(testObject, defaultProps));
