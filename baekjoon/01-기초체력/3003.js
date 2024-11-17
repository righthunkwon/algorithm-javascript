const input = require('fs').readFileSync('./tc.txt').toString().trim().split(' ').map(Number);
const requiredChessItems = {
  king: 1,
  queen: 1,
  rook: 2,
  bishop: 2,
  knight: 2,
  pawn: 8,
};
const keys = Object.keys(requiredChessItems);
const result = keys.map((key, i) => requiredChessItems[key] - input[i]).join(' ');
console.log(result);
