function checkCapacity(users) {
  let totalWeight = 0;

  users.forEach(user => {
    totalWeight += user.weight;
  });

  if (users.length >= 10 || totalWeight > 1000) {
    console.log("حمولة زائدة! ❌");
  } else {
    console.log("الحمولة مسموح بها. ✅");
  }
}


let usersList = [
  { name: "أحمد", weight: 80 },
  { name: "محمد", weight: 95 },
  { name: "سارة", weight: 65 },
  { name: "خالد", weight: 850 } 
];

checkCapacity(usersList); 