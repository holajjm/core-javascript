import { getNode, getNodes,diceAnimation, insertLast, endScroll, memo } from './lib/index.js'


const [rollingButton, recordButton, resetButton] = getNodes('.buttonGroup > button');
const recordListWrapper = getNode('.recordListWrapper');

//기본 형태(변수 불안전)
// let isClicked = false;
// let stopAnimation;

// function handleRollingDice(){

//     if(!isClicked){
//         stopAnimation = setInterval(diceAnimation,700)
//     }else{
//         clearInterval(stopAnimation);
//     }
//     isClicked = !isClicked;
// }

// rollingButton.addEventListener('click', handleRollingDice)











// closure 형태
function handleRollingDice(){
    
    let isClicked = false;
    let stopAnimation;

    return () => {
        if(!isClicked){
            stopAnimation = setInterval(diceAnimation,700)
            recordButton.disabled = true;
            resetButton.disabled = true;
        }else{
            clearInterval(stopAnimation);
            recordButton.disabled = false;
            resetButton.disabled = false;
        }
        isClicked = !isClicked;
    }
}

function handleRecord(){
    recordListWrapper.hidden = false;
    renderRecordItem()
}

//미니과제 : 만들어주는 함수 분리, 초기화 버튼 클릭 시 초기화

let count = 0;
let total = 0;

function createItem(value){
    return `
    <tr>
        <td>${++count}</td>
        <td>${value}</td>
        <td>${total += value}</td>
    </tr>
    `
}

function renderRecordItem(){
    const cube = getNode('#cube')
    // const diceValue =  +(cube.dataset.dice);
    const template = /*html*/`
    <tr>
        <td>${++count}</td>
        <td>${diceValue}</td>
        <td>${total += diceValue}</td>
    </tr>
    `
    const diceValue = +memo('cube').dataset.dice
    insertLast('.recordList tbody',createItem(diceValue));
    endScroll(recordListWrapper)
}

function handleReset(){
    recordListWrapper.hidden = true;
    //1.tbody 내부 요소 제거
    getNode('tbody').textContent = ''
    //2.count,total 값 초기화
    count = 0;
    total = 0;
    //3.기록,초기화 버튼 비활성화
    recordButton.disabled = true;
    resetButton.disabled = true;

}


rollingButton.addEventListener('click', handleRollingDice())
recordButton.addEventListener('click', handleRecord())
resetButton.addEventListener('click',handleReset);




//IIFE 형태
// const handleRollingDice = (() => {
    
//     let isClicked = false;
//     let stopAnimation;

//     return () => {
//         if(!isClicked){
//             stopAnimation = setInterval(diceAnimation,10)
//             console.log('start');
//         }else{
//             clearInterval(stopAnimation);
//             console.log('end');
    
//         }
//         isClicked = !isClicked;
//     }
// })()

// rollingButton.addEventListener('click', handleRollingDice)