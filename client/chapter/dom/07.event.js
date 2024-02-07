/* --------------------- */
/* Event Handling        */
/* --------------------- */


/* 이벤트 핸들링 3가지 방법 --------------------------------------------------- */

const first = document.querySelector('.first');





// 1. HTML 속성 : onclick="handler()"


// 2. DOM 프로퍼티 : element.onclick = handler
function handler(){
    console.log('click event');
}

// first.onclick = handler

// 3. 메서드 : element.addEventListener(event, handler[, phase])



//closure의 활용

// function bindEvent(node,type,func){
//     if(typeof node === 'string') node = getNode(node);
//     node.addEventListener(type, func);
//     return () => node.removeEventListener(type, handler);
// }
// import {bindEvent} from 'bindEvent.js';
/* global bindEvent*/

// const remove = bindEvent('.first','click',handler)









// first.addEventListener('click', handler);



// getNode('.deleteEvent').addEventListener('click',() => {
//     first.removeEventListener('click',handler);
// })






/* 이벤트 추가/제거 --------------------------------------------------------- */

// - addEventListener
// - removeEventListener





const ground = getNode('.ground');
const ball = getNode('#ball');

function handleBall({offsetX:x, offsetY:y}){
    // const x = e.offsetX;
    // const y = e.offsetY;
    // const {offsetX:x, offsetY:y} = e;
    // console.log(x,y);

    const a = ball.offsetWidth / 2
    const b = ball.offsetHeight / 2
    // console.log(a,b);



    ball.style.transform = `translate(${x-a}px,${y-b}px)`

}


ground.addEventListener('click', handleBall)


// function handleEmotion({offsetX:x, offsetY:y}){
//     console.log(x,y)

//     ball.style.transform = `translate(${x - ball.offsetWidth / 2}px, ${y - ball.offsetHeight / 2})`

//     let template = `<div class="emotion" style="color:white; top:${y}px; left:${x}px">hi</div>`

//     insertLast(ground,template)
// }

// ground.addEventListener('mousemove', handleEmotion);



// throttle , debounce


//1. normal
let timeout;

function debounce(callback,limit){
    clearTimeout(timeout);
    timeout = setTimeout(() => {
        callback()
    },limit)
}
// debounce(() => {
//     console.log('do!')
// },1000)

//2. closure
// function debounce(callback,limit){
//     let timeout;
//     return function(){
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             callback()
//         },limit)
//     }
// }

//3. call,apply,bind
// function debounce(callback,limit){
//     let timeout;
//     return function(){
//         clearTimeout(timeout);
//         timeout = setTimeout(() => {
//             callback.call(this,e)
//         },limit)
//     }
// }
// ground.addEventListener('mousemove',debounce(function(e){
//     console.log(this);
// },1000))

function handle(e){
    console.log(this.e);
}

function throttle(callback, limit = 100){
    let waiting = false;
    return function(...args){
        if(!waiting){
            callback.apply(this,args);
            waiting = true;

            setTimeout(() =>{
                waiting = false;
            },limit);
        }
    }
}

ground.addEventListener('mousemove', throttle(handle,2000))