
let users = [
    { name: "wadea", email: "wadea@gmail.com" },
    { name: "Ali", email: "test_user@gmail.com" },
    { name: "Mona", email: "mona_test@gmail.com" },
    { name: "Sami", email: "sami@gmil.com" }
];

function filterEmail(email) {
    return !email.toLowerCase().includes('test');
}

let validUsers = users.filter(user => filterEmail(user.email));

console.log(validUsers);
