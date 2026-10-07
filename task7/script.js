let posts = [
  { id: 1, title: "مقال 1", content: "محتوى 1", image: "img1.jpg" },
  { id: 2, title: "مقال 2", content: "محتوى 2", image: "" },
  { id: 3, title: "مقال 3", content: "محتوى 3", image: "img3.jpg" },
  { id: 4, title: "مقال 4", content: "محتوى 4", image: null }
];

posts.forEach(p => {
  console.log(`ID: ${p.id} | Title: ${p.title} | Content: ${p.content} | Image: ${p.image || "default image"}`);
});