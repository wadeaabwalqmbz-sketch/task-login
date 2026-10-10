function calculateHallProfit(hoursPerDay, pricePerHour) {
    let dailyRevenue = hoursPerDay * pricePerHour;
    let weeklyRevenue = dailyRevenue * 6;
    let monthlyRevenue = weeklyRevenue * 4;

    let operationalCostRate = pricePerHour <= 30 ? 0.40 : 0.15;

    let weeklyNetProfit = weeklyRevenue * (1 - operationalCostRate);
    let monthlyNetProfit = monthlyRevenue * (1 - operationalCostRate);

    return {
        pricePerHour: pricePerHour,
        hoursPerDay: hoursPerDay,
        operationalCostRate: (operationalCostRate * 100) + "%",
        weeklyRevenue: weeklyRevenue,
        weeklyNetProfit: weeklyNetProfit,
        monthlyRevenue: monthlyRevenue,
        monthlyNetProfit: monthlyNetProfit
    };
}

let result1 = calculateHallProfit(7, 30);
console.log("نتائج القاعة الأولى (30/ساعة):", result1);

let result2 = calculateHallProfit(8, 50);
console.log("نتائج القاعة الثانية (50/ساعة):", result2);