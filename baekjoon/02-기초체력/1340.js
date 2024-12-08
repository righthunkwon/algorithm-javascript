const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');
const M = input[0];
const D = +input[1].slice(0, input.length - 2);
const Y = +input[2];
const T = input[3];

const daysByMo = {
  January: 31,
  February: 28,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

const daysByMoAtLeapYr = {
  January: 31,
  February: 29,
  March: 31,
  April: 30,
  May: 31,
  June: 30,
  July: 31,
  August: 31,
  September: 30,
  October: 31,
  November: 30,
  December: 31,
};

function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 4 === 0 && year % 100 > 0) return true;
  return false;
}

function getProgress() {
  let total = 0; // 분단위
  let progress = 0; // 분단위

  if (isLeapYear(Y)) {
    total = 366 * 24 * 60; // 윤년의 경우 366일
    for (const month in daysByMoAtLeapYr) {
      if (month === M) break;
      progress += daysByMoAtLeapYr[month] * 24 * 60;
    }
  } else {
    total = 365 * 24 * 60; // 윤년이 아닌 경우 경우 365일
    for (const month in daysByMo) {
      if (month === M) break;
      progress += daysByMo[month] * 24 * 60;
    }
  }
  progress += (D - 1) * 24 * 60; // 일(*당일의 경우 하루 전체가 지난 게 아니기 때문에 -1을 해주어야 한다)
  progress += +T.split(':')[0] * 60; // 시
  progress += +T.split(':')[1]; // 분(*문자열로 연산되어 오류 발생)

  console.log((progress / total) * 100);
}

getProgress();
