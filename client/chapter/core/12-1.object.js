/* --------- */
/* Object    */
/* --------- */


/* Primitives vs. Object --------- */

// key:value 쌍으로 구성된 엔티티(entity) 데이터 구조
let cssCode = /*css*/`
  .dialog {
    position: fixed;
    z-index: 10000;
    top: 50%;
    left: 50%;
    width: 60vw;
    max-width: 800px;
    height: 40vh;
    min-height: 280px;
    transform: translate(-50%, -50%);
  }
`;

// 위 CSS 스타일 코드를 JavaScript 객체로 작성해봅니다.
let cssMap = {
    position: 'fixed',
    ["z-index"]: 10000,
    top: "50%",
    left: "50%",
    width: "60vw",
    ["max-width"]: "800px",
    height: "40vh",
    ["min-height"]: "280px",
    transform: "translate(-50%, -50%)",
}


// 인증 사용자 정보를 객체로 구성해봅니다.
// 인증 사용자(authentication user) (권한 : authorization)
// - 이름
// - 이메일
// - 로그인 여부
// - 유료 사용자 권한

let authUser = {
    uuid: crypto.randomUUID(),
    name: 'mike',
    email: 'holajjm@naver.com',
    isSignIn: false,
    permission: 'paid'// paid: 결제 사용자 / free : 무료 사용자
};


// 점(.) 표기법
// authUser 객체의 프로퍼티에 접근해 Console에 출력해봅니다.

//getter
(authUser.uuid);
(authUser.name);
(authUser.email);
(authUser.isSignIn);
(authUser.permission);

//setter
(authUser.permission = 'free');


// 대괄호([]) 표기법
// 유료 사용자 권한(paid User Rights) 이름으로 프로퍼티를 재정의하고 
// 대괄호 표기법을 사용해 접근 Console에 출력해봅니다.

//getter
authUser['uuid'];
authUser['name'];
authUser['email'];
authUser['isSignIn'];
authUser['permission'];

//setter
authUser['permission'] = true;



// 해당 객체의 키 값의 존재 여부를 확인 하는 방법 => in 문
// console.log('name' in authUser)

//hasOwnProperty 빌려쓰기
Object.prototype.nickname = 'tom';


for(let key in authUser){
    if(Object.prototype.hasOwnProperty.call(authUser, key)){
        // console.log(key);
    }
}

// console.clear();


//객체의 key만을 모아놓은 배열(객체 -> 배열(key))
const keyList = Object.keys(authUser);
// console.log(keyList);


function keys(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push(key);
        }
    }
    return result;
}

console.log(keys(authUser)) // ['uuid','name','email']

//객체의 value만을 모아놓은 배열(객체 -> 배열(value))
const valueList = Object.values(authUser);
// console.log(valueList);

function values(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push(obj[key]);
        }
    }
    return result;
}

console.log(values(authUser))


//객체의 property를 모아놓은 배열(객체 -> 배열(property))
const arr = Object.entries(authUser);
// console.log(arr);

function entries(obj){
    let result = [];
    for(let key in obj){
        if(Object.prototype.hasOwnProperty.call(obj,key)){
            result.push([key, obj[key]]);
        }
    }
    return result;
}

console.log(entries(authUser))


//remove property(비워둠) or delete property(삭제)
authUser.name = null;
delete authUser.uuid;

console.log(authUser)


//myanswer

function removeProperty1(obj, key) {
    return obj;
}
console.log(removeProperty(authUser));


removeProperty(authUser, 'uuid') // authUser.uuid = null;
deleteProptery(authUser, 'uuid') // authUser.uuid = undefined;

//teacher answer
function removeProperty(obj, key) {
    if(isObject(obj)){
        obj[key] = null;
    }
    
}
function isObject(data){
    return Object.prototype.toString.call(data).slice(8,-1).toLowerCase() === 'object';
}

function deleteProptery(obj, key){
    if(!isObject(obj)) return;
    delete obj[key];
}


// 계산된 프로퍼티 (computed property)
let calculateProperty = 'phone'; // phone | tel


function createUser(name,age,phone){
    return{
        name,
        age,
        [calculateProperty]:phone
    }
}
console.log(createUser);


// 프로퍼티 포함 여부 확인


// 프로퍼티 나열


// 프로퍼티 제거 or 삭제 


// 단축 프로퍼티
let name = '선범';
let email = 'seonbeom2@euid.dev';
let authorization = 'Lv. 99';
let isLogin = true;

//shorthand property
const student = {
    name,
    email,
    authorization,
    isLogin
}
console.log(student)


// 프로퍼티 이름 제한
// 예약어: class, if, switch, for, while, ...


// 객체가 프로퍼티를 포함하는 지 유무를 반환하는 유틸리티 함수 isEmptyObject 작성
function isEmptyObject() {
  return null;
}


console.clear();

/* ------------------------------------------- */
/* 배열 구조 분해 할당  destructuring assignments   */
/* ------------------------------------------- */
const [a,b,c,d,e] = [1,2,3,4,5];

//배열 구조 분해 할당의 할당 순서는 바꿀 수 없지만 변수의 이름(f)은 변경이 가능하다. rest parameters로 받고 싶은 순서까지 콤마를 사용하면 생략된다.
const [f,...rest] = [10,20,30,40,50]; //rest parameters
//const로 구조 분해 할당을 하여 할당받은 변수는 재할당이 불가능하므로 재할당이 가능하게 하기 위해서는 let으로 할당을 받아야한다.

console.log(...rest);

for(let [key,value] of Object.entries(authUser)){
    console.log(key,value);
}

const [first, second] = document.querySelectorAll('span');



/* -------------------------------------------- */
/* 객체 구조 분해 할당  destructuring assignments    */
/* --------------------------------------------- */

const salaries = {
    one: 80,
    two: 100,
    three: 200,
    four: 300,
    five: 1000
}

//객체 구조 분해 할당은 할당의 순서가 상관이 없다. 또한 변수의 이름도 변경이 가능하다.
const {one,two,three,four,five} = salaries;
//또한 변수의 추가도 가능하다.(= 매개변수 기본값 설정)
const {six = 1200} = salaries;




//함수 + 객체 구조 분해 할당 사용 예시

//<함수 안에서 객체를 구조 분해하기>
function createUserList(options){
    const {name,age,address,phone } = options;

    return {name, age, address, phone}
}

/* 매개변수에 바로 구조 분해 할당 대입하는 방법
function createUserList({
    name,
    age,
    address,
    phone 
}){
    return {name, age, address, phone}
}
*/

//<함수의 인수가 많아졌을 때 매개변수를 객체로 받아서 사용>
createUserList(
    {
        name: 'mike',
        age: 10,
        address: 'home',
        phone: '1234'
    }
)

//<스코프 안에 동일한 변수가 사용될 경우 alias(별칭)을 지정할 수 있다>

//객체 구조 분해 할당에 의거하여 만들어진 함수는 특정 프로퍼티를 가지는 객체에 한해서 사용이 가능하게 되므로 객체형태를 초기화 해놓고 대입하는 문법으로 MixIn 문법이 존재한다.