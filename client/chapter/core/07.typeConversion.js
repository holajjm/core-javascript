/* --------------------- */
/* Type Conversion       */
/* --------------------- */


/* 데이터 → 문자 ----------------------------------------------------------- */

// number

const YEAR = 2024;
console.log(String(YEAR));
console.log(YEAR + ' ');
console.log((YEAR + '   ').trim());

// undefined, null
let days = null;
let weekend;
console.log(days + '');
console.log(undefined + '');
// boolean
let isClicked = false; // 변수 안에 is,has를 갖고 있으면 일반적으로 boolean을 의미한다.
console.log(isClicked + '');

/* 데이터 → 숫자 ----------------------------------------------------------- */

// undefined
let friend;
console.log(Number(friend));
// null
let money = null;
console.log(Number(money));
// boolean
let cutie = true;
console.log(Number(cutie));
// string
let num = '250';
console.log(Number(num));
console.log(num * 1);
console.log(num / 1);
console.log(+num);
// numeric string
const width = '105.3px';
console.log(Number(width));
console.log(parseFloat(width))

/* 데이터 → 불리언 ---------------------------------------------------------- */
// null, undefined, 0, NaN, ''
console.log(Boolean(friend));
// 위에 나열한 것 이외의 것들 
const value = prompt('hey!');
console.log(+value + 10);