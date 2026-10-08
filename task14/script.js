let choices = ["حجر", "ورقة", "مقص"];
let userChoice = prompt("اختر: حجر، ورقة، أو مقص");

if (!choices.includes(userChoice)) {
  alert("إدخال خاطئ!");
} else {
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  if (userChoice === computerChoice) {
    alert(`تعادل! الجهاز اختار ${computerChoice}`);
  } else if (
    (userChoice === "حجر" && computerChoice === "مقص") ||
    (userChoice === "ورقة" && computerChoice === "حجر") ||
    (userChoice === "مقص" && computerChoice === "ورقة")
  ) {
    alert(`فزت! 🏆 (الجهاز اختار ${computerChoice})`);
  } else {
    alert(`خسرت! ❌ (الجهاز اختار ${computerChoice})`);
  }
}