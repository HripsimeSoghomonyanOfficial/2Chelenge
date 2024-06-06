function topStudents(students) {
    let highestScore = Math.max(...students.map(student => student.score));
    let topStudents = students.filter(student => student.score === highestScore);
    let result = {};
    topStudents.forEach(student => {
        result[student.name] = student.score;
    });

    return result;
}
let students = [
    { name: "Alice", score: 95 },
    { name: "Bob", score: 92 },
    { name: "Charlie", score: 95 },
    { name: "David", score: 88 }
];
console.log(topStudents(students));