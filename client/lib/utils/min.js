const END_POINT = 'https://jsonplaceholder.typicode.com/users'


const defaultOptions = {
    method:'GET',
    body: null,
    headers:{
        'Content-Type' : 'application/json',
        'Access-Control-Allow-Origin' : '*'
    }
}




export const min = async (options) => {

    const {url, ...restOptions} = {
        ...defaultOptions,
        ...options,
        headers:{
            ...defaultOptions.headers,
            ...options.headers
        }
    }

    // console.log({...restOptions})
    
    const response = await fetch(url,restOptions); //Promise<response>
    
    // ok : status 200~399
    if(response.ok){
        // const data = await response.json(); //json()이 JSON.parse()를 미리 실행해준다.

        response.data = await response.json();
        // const a = await response
        // console.log(a)

    }
    return response

}
// const result = await min({
//     url: END_POINT
// });

// console.log(result.data)


min.get = (url,options) => {
    return min({
        url,
        ...options
    })
}

// min.post = (url,body,options) => {
//     return min({
//         method:'POST',
//         url,
//         body:JSON.stringify(body),
//         ...options
//     })
// }
// min.put = (url,body,options) => {
//     return min({
//         method:'PUT',
//         url,
//         body:JSON.stringify(body),
//         ...options
//     })
// }
// min.delete = (url,options) => {
//     return min({
//         method:'DELETE',
//         url,
//         ...options
//     })
// }

// min.get();
// min.post();
// min.put();
// min.delete();