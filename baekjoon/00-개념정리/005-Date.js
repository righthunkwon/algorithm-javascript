const week = ['일', '월', '화', '수', '목', '금', '토'];
let nowDate = new Date();
let month = nowDate.getMonth() + 1; // month: 0 ~ 11
let date = nowDate.getDate();
let day = nowDate.getDay(); // day: 0 ~ 6 (일 ~ 토)
let hours = nowDate.getHours();
let minutes = nowDate.getMinutes();
console.log(`${month}월 ${date}일 ${week[day]}요일 ${hours}:${minutes}`);
