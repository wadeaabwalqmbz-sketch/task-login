let forbiddenWords = ["رقم", "تواصل", "واتساب", "تليجرام", "خارج", "رقمك", "نتواصل"];
let userMessage = prompt("أدخل رسالتك للعميل:");
let count = 0;

forbiddenWords.forEach(word => {
  if (userMessage.includes(word)) count++;
});

if (count >= 2) {
  alert("عذراً، هذه الجملة غير مرغوب فيها داخل المنصة! ❌");
} else {
  alert("تم إرسال الرسالة بنجاح! ✅");
}