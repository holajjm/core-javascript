import { getNode } from "../dom/getNode.js"
import { isNumber, isObject } from "./typeOf.js";

console.log('hi')










const first = getNode('.first');
const second = getNode('.second');



function delay(callback, timeout = 1000){
    setTimeout(callback,timeout)
}

delay(() => {
    first.style.top = '-100px'
    second.style.top = '100px'
    delay (() => {
        first.style.transform = 'rotate(360deg)'
        second.style.transform = 'rotate(-360deg)'
        delay(() => {
            first.style.top = '0';
            second.style.top = '0';
        })
    })
})


//기본 객체 설정
const defaultOptions = {
    a: false,
    timeout: 4000,
    successMessage:'Success!',
    failMessage:'Fail!'
}

function delayP(options){

    let config = {...defaultOptions} // 함수 내에서 기본 객체 불러오기 

    if(isNumber(options)) config.timeout = options; //새로운 값이 숫자인 경우 새로운 객체에 시간값으로 넣기
    if(isObject(options))config = {...defaultOptions,...options}; //새로운 값이 객체인 경우 외부에서 받아온 기존 객체에 새로운 객체까지 overriding하기(뒤의 요소가 더 우선순위가 높음)

    let {a,timeout,successMessage, failMessage} = config; // 최종 변경이 된 객체를 구조 분해 할당하기

    return new Promise((res,rej) => {
        setTimeout(() => {
            if(!a){
                res(successMessage)
            }else{
                rej(failMessage)
            }
        }, timeout);
    })
}

const result = delayP(1000); // 새로운 값을 받는데 객체가 아닌 단순 자료형태의 값이 주어짐




result
    .then((res) => {
    console.log(res);
    })
    .catch((err)=> {
        console.log(err)
    })







// const promise = new Promise((res,rej) => {
//     // res('success');
//     rej('fail');
// })

// console.log(promise)