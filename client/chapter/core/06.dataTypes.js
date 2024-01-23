/* ------------------------ */
/* Data Types               */
/* ------------------------ */

/* ECMAScript의 8가지 데이터 타입 -------------------------------------------- */

// 1. 존재하지 않는(nothing) 값 / 비어있는(empty) 값 / 알 수 없는(unknown) 값
let empty = null;

// 2. 값이 할당되지 않은 상태
let undef = undefined;

// 3. 따옴표를 사용해 묶은 텍스트(큰", 작은', 역`)
const single = 'hello';
const double = "hello";
const backtic = `hello ${10 * 40}`;


const str = new String('hi');








// 4. 정수, 부동 소수점 숫자(길이 제약)
const integer = 150;
const floatingPointNumber = 10.331;

// 5. 길이에 제약이 없는 정수(예: 암호 관련 작업에서 사용)
const bigNumber = 123n;

// 6. 참(true, yes) 또는 거짓(false, no)
const isClicked = false;

// 7. 데이터 컬렉션(collection) 또는 복잡한 엔티티(entity)
const obj = {
    name: 'holajjm',
    age: 20,
}

// 8. 고유한 식별자(unique identifier)
const unique = Symbol('hello');

/* typeof 연산자의 2가지 사용법 ---------------------------------------------- */

// 1) 연산자 typeof


// 2) 함수 typeof()

// 언어 상, 오류




// Object


// const user = {
//     name: 'tiger',
//     age: 10,
//     add : function(a,b) {
//         return a + b;
//     },
//     minus : (a,b) => {
//         return a - b;
//     },
//     times(a,b) {
//         return a * b;
//     }
// }
const user = {
    name: 'tiger',
    age: 10,
    add : function(a,b) {
        console.log(this);
    },
    minus : (a,b) => {
        console.log(this);
    },
    times(a,b) {
        console.log(this);
    }
}

// Array

// function

// this


