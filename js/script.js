// 1. تحديد العناصر من الصفحة
const passInput = document.getElementById("password");
const toggleIcon = document.querySelector(".toggle-pass");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

// 2. إظهار وإخفاء كلمة المرور
toggleIcon.addEventListener("click", function () {
  if (passInput.type === "password") {
    passInput.type = "text";
    toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passInput.type = "password";
    toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
});

// 3. دالة فحص قوة كلمة المرور
passInput.addEventListener("input", function () {
  const val = passInput.value;
  let score = 0;

  if (val.length === 0) {
    strengthBar.style.width = "0%";
    strengthText.textContent = "";
    return;
  }

  // المعيار 1: الطول بين 8 و 20 حرفاً (20%)
  if (val.length >= 8 && val.length <= 20) score += 20;

  // المعيار 2: يحتوي على حروف صغيرة (20%)
  if (/[a-z]/.test(val)) score += 20;

  // المعيار 3: يحتوي على حروف كبيرة (20%)
  if (/[A-Z]/.test(val)) score += 20;

  // المعيار 4: يحتوي على أرقام (20%)
  if (/[0-9]/.test(val)) score += 20;

  // المعيار 5: يحتوي على رموز خاصة (20%)
  if (/[^a-zA-Z0-9]/.test(val)) score += 20;

  // تحديث طول وسُمك شريط القوة
  strengthBar.style.width = score + "%";

  // تغيير لون الشريط والنص بناءً على النسبة
  if (score <= 40) {
    strengthBar.style.backgroundColor = "#e53e3e"; // أحمر (ضعيفة)
    strengthText.style.color = "#e53e3e";
    strengthText.textContent = `Weak (${score}%) - Include uppercase & 8+ chars`;
  } else if (score <= 80) {
    strengthBar.style.backgroundColor = "#dd6b20"; // برتقالي (متوسطة)
    strengthText.style.color = "#dd6b20";
    strengthText.textContent = `Medium (${score}%) - Add symbols or numbers`;
  } else {
    strengthBar.style.backgroundColor = "#38a169"; // أخضر (قوية جداً)
    strengthText.style.color = "#38a169";
    strengthText.textContent = `Strong (${score}%)`;
  }
});