let scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
let sortedScores = scores.sort();
console.log(scores);


sortedScores.forEach(function(sortedScores) {
    if (sortedScores > 89) {
        console.log("A");
    } else if (sortedScores > 80) {
        console.log("B");
    } else if (sortedScores > 70) {
        console.log("C");
    } else if (sortedScores > 60) {
        console.log("D");
    } else {
        console.log("F");
    }
});

let maxGrade = Math.max.apply(null, scores);
console.log(maxGrade);
let minGrade = Math.min.apply(null, scores);
console.log(minGrade);







// How many of each grade? (finding numbers in ranges)
// What is the lowest grade? (finding lowest number 
// and correspanding letter grade)
// What is the highest grade? (finding highest number 
// and correspanding letter grade)
// 
// 
// A score of 50-60 is an F
// A score of 61-70 is a D
// A score of 71-80 is a C
// A score of 81-90 is a B
// A score of 91-100 is an A

/*(if/ else)
  1 create array of grade ranges? 
  2 pull numbers out of score array in correspndence to range array(compare)
  3 print number of each letter grade in score array
  4 print lowest letter grade
  5 print highest letter grade*/