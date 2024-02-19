


import {setStorage,getStorage,deleteStorage, getNode, clearContents} from './lib/index.js';



// 1. textField의 값을 로컬스토리지에 저장

const textField = getNode('#textField');
const clear = getNode('[data-name="clear"]')

const handleTextField = (e) => {
    const value = e.target.value;
    setStorage('text',value)
}
textField.addEventListener('input',handleTextField);

const handleClear = () => {
    deleteStorage('text')
        .then(() => {
            clearContents(textField)
        })
}


clear.addEventListener('click', handleClear);



// function init(){
//     console.log('init');
// }

// window.addEventListener('DOMContentLoaded',init);

// IIFE
(() => {
    getStorage('text').then((res) => {
        textField.value = res;
    })
})();

// IIAFE
(async () => {
    const data = await getStorage('text')
    textField.value = data;
})()