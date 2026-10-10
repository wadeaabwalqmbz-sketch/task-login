function findLongestName(...names) {
    if (names.length > 10) {
        return console.log("تنبيه: هذه الدالة تستقبل 10 أشخاص كحد أقصى!");
    }

    let longest = names.reduce((prev, current) => 
        current.length > prev.length ? current : prev
    );

    console.log("الاسم الأكثر حروفاً هو:", longest);
}

findLongestName("أحمد", "محمد", "علي", "كاميليا");

findLongestName("أحمد", "محمد", "علي", "كاميليا", "سارة", "خالد", "عبدالهادي", "عمر", "فاطمة", "يوسف", "مريم", "إبراهيم");