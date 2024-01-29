/* ----------------------- */
/* Functions → Expression  */
/* ----------------------- */


function calcTotal(moneyA, moneyB, moneyC, moneyD) {
    return moneyA + moneyB + moneyC + moneyD;
  }
  
  const resultX = calcTotal(10000, 8900, 1360, 2100);
  const resultY = calcTotal(21500, 3200, 9800, 4700);
  const resultZ = calcTotal(9000, -2500, 5000, 11900);
  
//   console.log(resultX);
//   console.log(resultY);
//   console.log(resultZ);


// 함수 선언 → 일반 함수 (표현)식
let calculateTotal = function(a,b,c){

    //내장 인수 집합 객체 arguments
    console.log(arguments);
    console.log(typeof arguments);

    //for문을 통한 인수들 합계
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        console.log(arguments[i]);
        total += arguments[i];
    }

    //for..of문을 통한 value들 출력
    for(let value of arguments){
        console.log(value);
    }

    //method 빌려쓰기
    Array.prototype.forEach.call(arguments, function(e){
      console.log(e);
    })

    //arguments의 부모를 배열로 변환
    arguments.__proto__ = Array.prototype;
    //배열로 전환 후 배열의 method 'forEach' 사용하여 콜백 함수 호출
    arguments.forEach(function(item, index){
        console.log(`${index} : ${item}`);
    })

    //arguments 객체(유사 배열)를 진짜 배열(array)로 변환
    const arr = Array.from(arguments); // 1번
    const arr1 = Array.prototype.slice.call(arguments); // 2번
    const arr2 = [...arguments]; // 3번
    console.log({arr,arr1,arr2});

    arr.reduce(function(acc, cur){
        return acc + cur;
    },0)

    return total;
  };






  const result = calculateTotal(1,2,3);

  console.log(result);
  
  // 익명(이름이 없는) 함수 (표현)식
  let anonymousFunctionExpression = function() {

  };
  
  
  // 유명(이름을 가진) 함수 (표현)식
  let namedFunctionExpression = function hello() {

  };
  
  
  // 콜백 함수 (표현)식
  let cb = function(state, success, fail){
    if(state){
        return success();
    }else {
        return fail();
    }
  };

  cb(true,
    () => { return 'success'}, 
    () => { return 'fail'}
    );

function movePage(url,success,fail){
    url.includes('www') ? success(url) : fail();
}

movePage(
    'https://www.naver.com',
    (url) => {
        console.log('after 3seconds');
        setTimeout(() => {
            // window.location.href = url;
        }, 3000);
    },
    () => {
        console.log('wrong link');
    }
)
  
  
  // 함수 선언문 vs. 함수 (표현)식
  
  
  // 즉시 실행 함수 (표현)식
  // Immediately Invoked Function Expression
  let IIFE;
  