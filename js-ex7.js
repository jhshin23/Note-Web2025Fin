const students = [ 
    { name: 'KSD', scores: { math: 85, english: 90, science: 88 } }, 
    { name: 'KJH', scores: { math: 92, english: 88, science: 95 } }, 
    { name: 'CSH', scores: { math: 78, english: 85, science: 80 } }, 
    { name: 'HSW', scores: { math: 95, english: 92, science: 90 } }, 
    { name: 'LCW', scores: { math: 70, english: 75, science: 72 } } 
]; 
console.log("=== 원본 학생 배열 ==="); 
console.log(students);

// 목표: // 1. map 메서드 사용학생 이름 (name) 과 평균 점수 (averageScore) 값을 가진 새로운 배열 생성
//  - calcAverage 함수 작성, 이용: 학생 => 평균
//  - addAverageScore 함수 작성, 이용: 학생 => { 이름, 평균 } 
const calcAverage = s =>((s.scores.math + s.scores.english + s.scores.science) / 3);
const makeStudentWithAverage = s => ({name:s.name, average: calcAverage(s)});
const newStudents = students.map(makeStudentWithAverage);
console.log("=== 이름과 평균 점수 배열 ==="); 
console.log(newStudents);
// 2. filter 메서드 사용 평균 점수가 80점 이상인 학생들만 추출
// //  - 방법 1: filterOver80Average 함수 작성, 이용: 학생 => 평균이 80 이상인가? 
// //  - 방법 2: filterOverAverage (커링) 함수 작성, 이용 (매개변수로 최소 평균 점수 전달) 
console.log("=== 평균 80점 이상 학생들 ==="); 
const filterOver80Average = s => s.average >= 80;

console.log("=== filterOver80Average 함수 이용 ==="); 
console.log(newStudents.filter(filterOver80Average));

console.log("=== filterOverAverage 함수 이용 ==="); 
const filterOverAverage = min => s => s.average >= min;
console.log(newStudents.filter(filterOverAverage(80)));