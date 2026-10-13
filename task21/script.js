let students = [
{ name: "وديع", 
    major: "software engineering",
    marks: [85, 90, 78, 92]
    },
{ name: "سارة",
    major: "Engineering", 
    marks: [45, 50, 40, 55] 
    },
{ name: "ميا",
    major: "Computer Science",
    marks: [95, 98, 100, 92] 
    },
{ name: "خالد",
    major: "Business",
    marks: [60, 65, 70, 58] 
    }
];

let getAvg = (s) => s.marks.reduce((a, b) => a + b, 0) / s.marks.length;

let getStats = (list) => {
  let avgs = list.map((s) => ({ name: s.name, avg: getAvg(s) }));
  let passed = avgs.filter((s) => s.avg >= 50).length;
  
  avgs.sort((a, b) => b.avg - a.avg); 

  return {
    passPercentage: `${((passed / list.length) * 100).toFixed(1)}%`,
    failPercentage: `${(((list.length - passed) / list.length) * 100).toFixed(1)}%`,
    topStudent: avgs[0],
    lowestStudent: avgs[avgs.length - 1]
  };
};

let getMajors = (list) => [...new Set(list.map((s) => s.major))];

let getMajorAvg = (list, major) => {
  let matched = list.filter((s) => s.major.toLowerCase() === major.toLowerCase());
  if (!matched.length) return "غير موجود";
  return (matched.reduce((acc, s) => acc + getAvg(s), 0) / matched.length).toFixed(2);
};

console.log("الإحصائيات:", getStats(students));
console.log("التخصصات:", getMajors(students));
console.log("معدل Computer Science:", getMajorAvg(students, "Computer Science"));



