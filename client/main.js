import { xhr } from './lib/index.js';

xhr.get(
    'https://jsonplaceholder.typicode.com/users',
    (data) => {
        // console.log(data)
    }    
)

xhr.post(
    'https://jsonplaceholder.typicode.com/users',
    {name: 'mike', age: 10},
    (data) => {
        // console.log(data)
    },
    () => {}
)