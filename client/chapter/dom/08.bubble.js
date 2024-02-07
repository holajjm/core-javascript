/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */

const section = getNode('section');
const article = getNode('article');
const p = getNode('p');

section.addEventListener('click',function(e){
    console.log(e.target);
    console.log(e.currentTarget);
    console.log(this);
})

// section.addEventListener('click',(e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
//     console.log(this);
// })


// section.addEventListener('click',() =>{
//     console.log('%c section','color:orange');
// })

// article.addEventListener('click',() =>{
//     console.log('%c article','color:dodgerblue');
// })

// p.addEventListener('click',(e) =>{
//     e.stopPropagation()
//     console.log('%c p','color:hotpink');
// })







/* 캡처링 ----------------------------------------------------------------- */