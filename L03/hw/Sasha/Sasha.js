console.log("hw3a");
let i = 0;
let n1 = 1;
let n2 = 2;

while (i < 10) {
  i++;
  console.log(`${n1}`);
  console.log(`${n2}`);
  n1 = n1 + n2;
  n2 = n2 + n1;
}

console.log("hw3b");
let number = 100;
let count = 0;
for (number = 100; number <= 300; number++) {
  if (number % 3 == 0) {
    count++;
    if (count % 5 == 0) {
      console.log(number);
    }
  }
}
