// const firstNum = document.querySelector('#firstNumber');
// const secondNum = document.querySelector('#secondNumber');
// const clearBtn = document.querySelector('#clear');
// const result = document.querySelector('.result');

// function calc(e){
//     e.preventDefault();
//     const a = +(firstNum.value);
//     const b = +(secondNum.value);
//     const plus = a + b;
//     result.innerHTML = plus;
// }

// secondNum.addEventListener('input',calc);

// function clear(){
//     result.innerHTML = '';
// }
// clearBtn.addEventListener('click',clear);



import { getNode, getNodes,insertLast,clearContents, refError } from './lib/index.js';



//Teacher Code #1 vanilla javascript

/*global getNode, ,getNodes, insertLast, clearContents*/

// const first = getNode('#firstNumber');
// const second = getNode('#secondNumber');
// const result = getNode('.result');
// const clear = getNode('#clear');

// // function clearContents(node){
// //     if(typeof node === 'string') node = getNode(node);
// //     if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'){
// //         node.value = ''
// //         return
// //     }
// //     node.textContent = ''
// // }


// function handleInput(){
//     const firstValue = Number(first.value);
//     const secondValue = Number(second.value);
//     const total = firstValue + secondValue;

//     clearContents(result);
//     insertLast(result,total);
// }

// function handleClear(e){
//     e.preventDefault();
//     clearContents(first);
//     clearContents(second);
//     result.textContent = '-';
// }


// first.addEventListener('input',handleInput);
// second.addEventListener('input',handleInput);
// clear.addEventListener('click',handleClear);


//Teacher Code #2 event delegation

// const calculator = getNode('.calculator');
// const result = getNode('.result');
// const clear = getNode('#clear');
// const numberInputs = Array.from(getNodes('input:not(#clear)'));



// function handleInput() {
//     const total = numberInputs.reduce((acc, cur) => acc + Number(cur.value), 0);

//     clearContents(result);  
//     insertLast(result, total);
// }

// function handleClear(e) {
//     e.preventDefault();

//     numberInputs.forEach(clearContents);

//     result.textContent = '-';
// }

// calculator.addEventListener('input', handleInput);
// clear.addEventListener('click', handleClear);