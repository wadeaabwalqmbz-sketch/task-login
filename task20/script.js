function cleanText(text) {
    return text
        .trim()                        
        .replace(/[^\w\s\u0600-\u06FF]/g, '')
        .replace(/\s+/g, ' ');            
}


let inputText = "   وديع         معين   @$!";
let cleanedText = cleanText(inputText);

console.log("النص الأصلي:", `"${inputText}"`);
console.log("النص المفلتر:", `"${cleanedText}"`); 
