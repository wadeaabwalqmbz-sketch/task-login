let graves = [
  {
    id: 1,
    name: "أحمد علي",
    birthDate: "1950-05-12",
    deathDate: "2018-09-20",
    section: "A",
    graveNumber: 101,
    visitors: [
      { name: "محمد", date: "2023-01-15" },
      { name: "خالد", date: "2023-06-10" },
      { name: "سارة", date: "2024-02-01" }
    ]
  },
  {
    id: 2,
    name: "فاطمة حسن",
    birthDate: "1965-08-25",
    deathDate: "2020-03-15",
    section: "A",
    graveNumber: 103,
    visitors: [
      { name: "علي", date: "2023-03-20" }
    ]
  },
  {
    id: 3,
    name: "محمود يوسف",
    birthDate: "1980-11-03",
    deathDate: "2018-12-05",
    section: "B",
    graveNumber: 201,
    visitors: [
      { name: "عمر", date: "2022-11-10" },
      { name: "إبراهيم", date: "2023-05-12" }
    ]
  }
];

function calculateAndAddAge(gravesList) {
  return gravesList.map(grave => {
    let birthYear = new Date(grave.birthDate).getFullYear();
    let deathYear = new Date(grave.deathDate).getFullYear();
    let age = deathYear - birthYear;
    return { ...grave, age };
  });
}

function getEmptyGraves(gravesList, sectionName, startNum, endNum) {
  let occupiedNumbers = gravesList
    .filter(grave => grave.section === sectionName)
    .map(grave => grave.graveNumber);

  let emptyGraves = [];
  for (let i = startNum; i <= endNum; i++) {
    if (!occupiedNumbers.includes(i)) {
      emptyGraves.push(i);
    }
  }
  return emptyGraves;
}

function getDeceasedByYear(gravesList, year) {
  return gravesList.filter(grave => {
    let deathYear = new Date(grave.deathDate).getFullYear();
    return deathYear === year;
  });
}

function sortByMostVisited(gravesList) {
  return [...gravesList].sort((a, b) => b.visitors.length - a.visitors.length);
}

function getVisitsBetweenDates(gravesList, startDate, endDate) {
  let start = new Date(startDate);
  let end = new Date(endDate);
  let results = [];

  gravesList.forEach(grave => {
    grave.visitors.forEach(visitor => {
      let visitDate = new Date(visitor.date);
      if (visitDate >= start && visitDate <= end) {
        results.push({
          visitorName: visitor.name,
          visitDate: visitor.date,
          deceasedName: grave.name,
          section: grave.section,
          graveNumber: grave.graveNumber
        });
      }
    });
  });

  return results;
}


console.log("العمر لكل متوفى:",
   calculateAndAddAge(graves));
console.log(" القبور الفارغة في القسم A (بين 100 و 105):",
   getEmptyGraves(graves, "A", 100, 105));
console.log(" المتوفون في سنة 2018:",
   getDeceasedByYear(graves, 2018));
console.log(" الترتيب حسب الأكثر زيارة:",
   sortByMostVisited(graves));

console.log(" الزيارات بين 2023-01-01 و 2023-12-31:",
   getVisitsBetweenDates(graves, "2023-01-01", "2023-12-31"));