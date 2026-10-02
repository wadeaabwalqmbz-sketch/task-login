let products = [
  { name: "لابتوب ", price: 850, rating: 4.5 },
  { name: "جوال", price: 15, rating: 2.8 }, 
  { name: "شاشة ", price: 300, rating: 3.9 },
  { name: "كيبورد ", price: 45, rating: 2.5 }, 
  { name: "سماعات ", price: 70, rating: 5.0 },
  { name: "ساعة", price: 120, rating: 3.2 }
];

console.log("المنتجات الأعلى تقييماً (أكثر من 3 نجوم) ");

products.forEach(product => {
  if (product.rating > 3) {
    
    let starsCount = Math.floor(product.rating);
    
    let starsPattern = "★".repeat(starsCount);

    console.log(`المنتج: ${product.name}`); 
    console.log(`السعر: $${product.price}`);
    console.log(`التقييم: ${starsPattern} (${product.rating})`);
  }
});