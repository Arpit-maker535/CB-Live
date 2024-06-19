function add(a, b, name) {
  greet(name);
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { add, subtract };
