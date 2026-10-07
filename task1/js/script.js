
const passInput = document.getElementById("password");
const toggleIcon = document.querySelector(".toggle-pass");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");


toggleIcon.addEventListener("click", function () {
  if (passInput.type === "password") {
    passInput.type = "text";
    toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
  } else {
    passInput.type = "password";
    toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
  }
});


passInput.addEventListener("input", function () {
  const val = passInput.value;
  let score = 0;

  if (val.length === 0) {
    strengthBar.style.width = "0%";
    strengthText.textContent = "";
    return;
  }

  
  if (val.length >= 8 && val.length <= 20) score += 20;

  
  if (/[a-z]/.test(val)) score += 20;

  
  if (/[A-Z]/.test(val)) score += 20;

  
  if (/[0-9]/.test(val)) score += 20;

  
  if (/[^a-zA-Z0-9]/.test(val)) score += 20;

  
  strengthBar.style.width = score + "%";

  
  if (score <= 40) {
    strengthBar.style.backgroundColor = "#e53e3e"; 
    strengthText.style.color = "#e53e3e";
    strengthText.textContent = `Weak (${score}%) - Include uppercase & 8+ chars`;
  } else if (score <= 80) {
    strengthBar.style.backgroundColor = "#dd6b20"; 
    strengthText.style.color = "#dd6b20";
    strengthText.textContent = `Medium (${score}%) - Add symbols or numbers`;
  } else {
    strengthBar.style.backgroundColor = "#38a169"; 
    strengthText.style.color = "#38a169";
    strengthText.textContent = `Strong (${score}%)`;
  }
});