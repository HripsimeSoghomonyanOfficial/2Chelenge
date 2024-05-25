function swap(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  return [a, b];
}

let a = 5;
let b = 6;
[a, b] = swap(a, b);
console.log("a =", a);
console.log("b =", b);
