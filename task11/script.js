function maskMiddleText(text, maxLength = 200) {
    if (text.length > maxLength) {
        let start = text.slice(0, 20);
        let end = text.slice(-20);
        let dots = ".".repeat(text.length - 40);

        return start + dots + end;
    }

    return text;
}
let myText = "تعتبر الذكاء الاصطناعي والتكنولوجيا الحديثة من أهم العوامل التي تساهم في تطوير حلول البرمجيات وتسهيل حياة الأفراد والمؤسسات، حيث تتسارع التطورات اليومية بشكل كبير لتتيح للمطورين بناء تطبيقات أكثر كفاءة وسرعة ودقة في معالجة البيانات الضخمة وتوفير تجربة مستخدم سلسة وفردية.";

let result = maskMiddleText(myText);

console.log(result);

