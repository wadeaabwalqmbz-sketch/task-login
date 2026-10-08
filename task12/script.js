let input = prompt("أدخل رقماً:");
let num = Number(input);

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

if (input && !isNaN(num) && num >= 0) {
  let fact = factorial(num);

  console.log(`مضروب ${num} هو: ${fact}`);
} else {
  console.log("مدخل غير صحيح!");
}

