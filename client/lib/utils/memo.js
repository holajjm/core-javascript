import { getNode } from "../dom/getNode.js"






export const memo = (() => {
    const cache = {
        cube: '#cube'
    }
    return (key,callback) => {
        if(!callback) return cache[key];
        if(cache[key]){
            console.warn(`${key} is already existed`);
            return cache[key];
        }
        cache[key] = callback();

    }
})();

// memo('cube',() => getNode('#cube'));
// memo('cube');



//1
// const cache = {
//     cube: '#cube'
// }
// const memo = ((key,callback) => {
//     if(!callback) return cache[key];
//     if(cache[key]){
//         console.warn(`${key} is already existed`);
//         return cache[key];
//     }
//     cache[key] = callback();
// })();
// memo('cube',() => getNode('#cube'));
// memo('cube');


//2 - closure
// const memo = (key,callback) => {
//     const cache = {
//         cube: '#cube'
//     }
//     return () => {
//         if(!callback) return cache[key];
//         if(cache[key]){
//             console.warn(`${key} is already existed`);
//             return cache[key];
//         }
//         cache[key] = callback();

//     }
// }

// memo('cube',() => getNode('#cube'))();
// memo('cube')();

//3 - parameter 수정
// const memo = () => {
//     const cache = {
//         cube: '#cube'
//     }
//     return (key,callback) => {
//         if(!callback) return cache[key];
//         if(cache[key]){
//             console.warn(`${key} is already existed`);
//             return cache[key];
//         }
//         cache[key] = callback();

//     }
// }

// memo()('cube',() => getNode('#cube'));
// memo()('cube');

//4 - IIFE
// const memo = (() => {
//     const cache = {
//         cube: '#cube'
//     }
//     return (key,callback) => {
//         if(!callback) return cache[key];
//         if(cache[key]){
//             console.warn(`${key} is already existed`);
//             return cache[key];
//         }
//         cache[key] = callback();

//     }
// })()

// memo('cube',() => getNode('#cube'));
// memo('cube');