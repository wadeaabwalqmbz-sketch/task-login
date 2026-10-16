let carData = {
  fare: 3,                 
  trips: 15,               
  passengers: 27.5,        
  nonPayersRate: 0.15,     
  maintenanceRate: 0.40,  
  fuelRate: 0.30,          
  workDaysPerWeek: 6,      
  weeksPerMonth: 4,        

  getDailyRevenue() {
    let gross = this.trips * this.passengers * this.fare; 
    let actual = gross * (1 - this.nonPayersRate);        
    return { gross, actual };
  },

  getDailyExpenses() {
    let { gross } = this.getDailyRevenue();
    let maintenance = gross * this.maintenanceRate; 
    let fuel = gross * this.fuelRate;               
    return { maintenance, fuel, total: maintenance + fuel };
  },

  getDailyNetProfit() {
    let { actual } = this.getDailyRevenue();
    let { total } = this.getDailyExpenses();
    return actual - total;
  },

  getProfits(extraRepairCost = 0) {
    let dailyNet = this.getDailyNetProfit();
    let weeklyNet = dailyNet * this.workDaysPerWeek;
    let monthlyNetBeforeExtra = weeklyNet * this.weeksPerMonth;
    let finalMonthlyNet = monthlyNetBeforeExtra - extraRepairCost;

    return {
      weeklyNet,
      monthlyNetBeforeExtra,
      extraRepairCost,
      finalMonthlyNet
    };
  }
};

let extraRepair = 150; 

console.log(" الإيرادات اليومية:", carData.getDailyRevenue());
console.log(" المصاريف اليومية:", carData.getDailyExpenses());
console.log(" صافي الربح اليومي:", carData.getDailyNetProfit());
console.log(" صافي الربح الأسبوعي والشهري:", carData.getProfits(extraRepair));