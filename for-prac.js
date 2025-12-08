const userList = [
    {name:'abc', age: 31, score: 100},
    {name:'efg', age: 42, score: 34},
    {name:'qwe', age: 56, score: 12},
];

function printInfo(user) {
    console.log(`이름: ${user.name}, 점수: ${user.score}`);
}
//for of
for (const user of userList) {
    printInfo(user);
}
//forEach callback 1
userList.forEach(user => { console.log(`이름: ${user.name}, 점수: ${user.score}`); });

//forEach callback 2
userList.forEach(printInfo);

function getAge(user) {
    user.age += 1;
}

function printUserInfo(user) {
    console.log(`이름: ${user.name}, 나이: ${user.age}`);
}
//레퍼런스 전달
userList.forEach(getAge);
userList.forEach(printUserInfo);

const students = [
    {name:'abc', age: 31, scores: [100, 1]},
    {name:'efg', age: 42, scores: [100, 34]},
    {name:'qwe', age: 56, scores: [100, 12]},
];

function calcAvg(student) {
    sum = 0;
    for (const score of student.scores) {
        sum += score;
    }
    return sum / student.scores.length;
}

function printScoreAvg(student) {
    const avg = calcAvg(student);
    console.log(`이름: ${student.name}, 평균: ${avg.toFixed(2)}`);
}

students.forEach(printScoreAvg);