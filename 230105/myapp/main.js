// @ts-check

const x = 5;
const number = Math.log(x);
console.log(number);

const obj = {
  pororo: '뽀로로',
  lupy: '루피',
  crong: '크롱',
};

// const copyObj = obj;
const copyObj = { ...obj, lupy: 'lupy' };

console.log(obj);
console.log(copyObj);
// console.log(obj === copyObj);
