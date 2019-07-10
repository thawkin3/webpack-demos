export function square(x) {
  console.log('square!');
  return x * x;
}

export function cube(x) {
  console.log('cube!');
  return x * x * x;
}

export function add(x, y) {
  console.log('add!');
  return x + y;
}

export function subtract(x, y) {
  console.log('subtract!');
  return x - y;
}

export function multiply(x, y) {
  console.log('multiply!');
  return x * y;
}

export function divide(x, y) {
  console.log('divide!');
  return x / y;
}

// don't do this!
// export default {
//   square,
//   cube,
//   add,
//   subtract,
//   multiply,
//   divide,
// }
