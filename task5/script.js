let users = [
  { name: "وديع معين", email: "wadea@gmail.com", type: "user" },
  { name: "سارة ", email: "sara@gmail.com", type: "admin" },
  { name: "محمد ", email: "mohamed@gmail.com", type: "user" },
  { name: "فاطمة ", email: "fatima@gmail.com", type: "admin" },
  { name: "نور ", email: "nour@gmail.com", type: "user" },
  { name: "ريم", email: "reem@gmail.com", type: "user" },
  { name: "ياسين ", email: "yassin@gmail.com", type: "admin" },
  { name: "ليلى ", email: "layla@gmail.com", type: "user" },
];

let userCount = 0;
let adminCount = 0;

for (let i = 0; i < users.length; i++) {
  if (users[i].type === "user") {
    userCount++;
  } else if (users[i].type === "admin") {
    adminCount++;
  }
}

console.log(`عدد المستخدمين (User): ${userCount}`);
console.log(`عدد المشرفين (Admin): ${adminCount}`);
