const END_POINT = 'https://jsonplaceholder.typicode.com/users';

export function xhr({
    method = 'GET',
    url = '',
    onSuccess = null,
    onFail = null,
    body = null,
    headers = {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
}) {
    const xhr = new XMLHttpRequest(); 

    xhr.open(method, url);

    Object.entries(headers).forEach(([key,value]) => [
        xhr.setRequestHeader(key,value)
    ])
    // xhr.setRequestHeader('Content-Type','application/json');

    xhr.addEventListener('readystatechange', () => {
    const { readyState, status, response } = xhr;

    if (readyState === 4) {
        if (status >= 200 && status < 400) {
        onSuccess(JSON.parse(response));
        } else {
        onFail({ message: 'Error!' });
        }
    }
});

    // xhr.send(JSON.stringify(body));
}

// xhr({
//     method: 'POST',
//     url: END_POINT,
//     onSuccess(response) {
//         console.log(response);
//     },
//     onFail({ message }) {
//         console.log(message);
//     },
//     body: { name: 'Mike' },
// });


xhr.get = (url,onSuccess,onFail) => {
    xhr({
        url,
        onSuccess,
        onFail
    })
}
xhr.get(
    END_POINT,
    () => {},
    () => {}
)

xhr.post = (url,body,onSuccess,onFail) => {
    xhr({
        method:'POST',
        url,
        onSuccess,
        onFail
    })
}

xhr.post(
    END_POINT,
    {name: 'Mike'},
    ()=>{},
    ()=>{}
);

xhr.delete = (url,onSuccess,onFail) => {
    xhr({
        method:'DELETE',
        url,
        onSuccess,
        onFail
    })
}







function xhrPromise(method, url, body){
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.send(JSON.stringify(body));

    return new Promise((res,rej) =>{
        xhr.addEventListener('readystatechange',() => {
            if(xhr.readyState === 4){
                if(xhr.status >= 200 && xhr.status < 400){
                    res(JSON.parse(xhr.response))
                }else{
                    rej({message: 'Error'})
                }
            }
        })
    })
}

xhrPromise('GET',END_POINT)
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    err.message
})