import { isString } from "./typeOf.js";





// localStorage.setItem('me','jongmin');
// localStorage.setItem('mike',JSON.stringify({name:'mike',age:10}))


// console.log(localStorage.getItem('user'))



// function setStorage(key,value){
    
//         localStorage.setItem(key,JSON.stringify(value));
    
// }

// setStorage('user',{name:'tom'});
// setStorage('user1','hello');
// setStorage('user2','hi');
// setStorage('user3',123);

// function getStorage(key){
//     return JSON.parse(localStorage.getItem(key))
// }

// getStorage('user')





const {localStorage:storage} = window;

export function setStorage(key,value){
    return new Promise((res,rej) => {
        if(isString(key)){
            storage.setItem(key,JSON.stringify(value))
            res()
        }else{
            rej({message: 'key is must be string'})
        }
    })
}

setStorage('user',{name:'tiger'})
    .then(() => {
        storage.getItem('user').toUpperCase()
    })

export function getStorage(key){
    return new Promise((res,rej) => {
        if(isString(key)){
            res(JSON.parse(storage.getItem(key)))
        }else{
            rej({message:'key us must be string'})
        }
    })
}

const data = await getStorage('user')
// console.log(data);


export function deleteStorage(key){
    return new Promise((res,rej) => {
        !key ? storage.clear() : storage.removeItem(key)
        res()
    })
}

