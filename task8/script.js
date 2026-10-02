let input = prompt("أدخل رقماً:");
let num = Number(input);

if (input && !isNaN(num) && num >= 0) {
  let fact = 1;
  for (let i = num; i > 1; i--) fact *= i;
  console.log(`مضروب ${num} هو: ${fact}`);
} else {
  console.log("مدخل غير صحيح!");
}