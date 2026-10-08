let meals = [
  { name: "شاورما", price: 15 },
  { name: "كالزوني", price: 25 },
  { name: "بيتزا", price: 30 },
  { name: "برجر", price: 20 },
  { name: "بطاطس", price: 10 },
  { name: "عصير", price: 8 },
  { name: "بطاطس", price: 10 },
  { name: "صاروخ", price: 40 },
];

function suggestMeals(maxPrice) {
  let suggestions = [];

  meals.forEach(meal => {
    if (meal.price <= maxPrice) {
      suggestions.push(`${meal.name} (${meal.price}₪)`);
    }
  });

  console.log(`مقترحات أقل من ${maxPrice}₪:`, suggestions.join(", "));
}


suggestMeals(20);
