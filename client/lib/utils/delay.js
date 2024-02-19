import { getNode } from "../dom/getNode.js"
import { isNumber, isObject } from "./typeOf.js";
import { xhrPromise } from "./xhr.js";
import { insertLast } from "../dom/insert.js";

// console.log('hi')










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

export function delayP(options){

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
    // console.log(res);
    })
    .catch((err)=> {
        console.log(err)
    })







const promise = new Promise((res,rej) => {
    res('success');
    rej('fail');
})

// console.log(promise)



//promise!!
function a() {
    return new Promise((res,rej) => {
        res({name:'mike', age: 10})
    })
}

a()
// console.log(a());
a().then((res) => {
    // console.log(res)
})




// Async & await #1 Basic

async function delayA(data){
    return data
}

// delayA('hello').then(console.log) -> then을 사용하여 결과 출력

const result1 = delayA('hello');
const result2 = await delayA('hello');

// console.log(result1);
// console.log(result2);


// Async & await #2 Practice

function ramen() {
    console.log('water');
    console.log('soup');
    console.log('noodle');
    console.log('bowl');
}

function ramen1() {
    delay(() => {
        console.log('water')
        delay(() => {
            console.log('soup')
            delay(() => {
                console.log('noodel')
                delay(() => {
                    console.log('bowl')
                })
            })
        })  
    })
}

function ramen2() {
    delayP()
    .then(()=>{
        console.log('water');
        return delayP
    })
    .then(()=>{
        console.log('soup');
        return delayP
    })
    .then(()=>{
        console.log('noodle');
        return delayP
    })
    .then(()=>{
        console.log('bowl');
        return delayP
    })
}
async function ramen3() {
    console.log('water');
    await delayP()
    
    console.log('soup');
    await delayP()

    console.log('noodle');
    await delayP()

    console.log('bowl');
    await delayP()

}



async function getData(){
    const data = await xhrPromise.get('https://pokeapi.co/api/v2/pokemon/7')

    const imgSrc = data.sprites.other.showdown['front_default'];

    insertLast('h1',`<img src="${imgSrc}" alt="" />`)

}

getData()