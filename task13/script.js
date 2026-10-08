let secretNumber = Math.floor(Math.random() * 50) + 1;

let guess = null;
let attempts = 0; 

while (guess !== secretNumber) {
  
  guess = Number(prompt("أدخل تخمينك للرقم (من 1 إلى 50):"));
  attempts++;

  if (isNaN(guess) || guess < 1 || guess > 50) {
    alert("من فضلك أدخل رقماً صحيحاً بين 1 و 50!");
  } else if (guess < secretNumber) {
    alert("اعلي⬆️");
  } else if (guess > secretNumber) {
    alert("أقل⬇️");
  } else {
    alert(`🎉 مبروك! إجابة صحيحة! الرقم هو ${secretNumber}.\nعدد محاولاتك: ${attempts}`);
  }
}

