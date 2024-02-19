
/* global gsap */
import { 
    min, 
    delayP, 
    insertLast, 
    changeColor,
    getNode as $,
    renderSpinner,
    renderUserCard,
    renderEmptyCard,
    clearContents
} from './lib/index.js';

// xhr.get(
//     'https://jsonplaceholder.typicode.com/users',
//     (data) => {
//         // console.log(data)
//     }
// )

// xhr.post(
//     'https://jsonplaceholder.typicode.com/users',
//     {name: 'mike', age: 10},
//     (data) => {
//         // console.log(data)
//     },
//     () => {}
// )


const END_POINT = 'http://localhost:3000/users';

const userCardInner = $('.user-card-inner');

//1.fetch user data with function name 'tiger'

// const response = await min.get(END_POINT);
// console.log(response);

//2. put data in function name 'renderUserList'
//3. paste html,css
//4. redering user data on browser
// - 유저 데이터(array) 순환하여 모든 아이템 뽑아내기(foreach)
// - 템플릿 변수 만들기(article)
// - template literal을 사용하여 데이터 집어넣기(보관 : interpolation)
// - insertLast함수를 사용하여 화면에 렌더링하기

async function renderUserList() {
    renderSpinner(userCardInner);

    try {
        await delayP();

        gsap.to('.loadingSpinner', {
            opacity: 0,
            onComplete() {
                $('.loadingSpinner').remove()
            }
    })

    const response = await min.get(END_POINT);

    const userData = response.data;

    userData.forEach((user) => renderUserCard(userCardInner, user));

    changeColor('.user-card');

    gsap.from('.user-card', {
        x: 100,
        opacity: 0,
        stagger: 0.1,
    });
    }   
    catch {
        renderEmptyCard(userCardInner);
    }   
}

renderUserList();

function hanldeDelete(e) {
    const button = e.target.closest('button');
    const article = e.target.closest('article');

    if (!button) return;

    const id = article.dataset.index.slice(5);

    min.delete(`${END_POINT}/${id}`).then(() => {
        clearContents(userCardInner);
        renderUserList();
    });
  //delete 통신 이후
  //기존 유저의 목록 제거
  //유저 목록 fetch 이후 재렌더링
}
userCardInner.addEventListener('click', hanldeDelete);


const createButton = $('.create');
const cancelButton = $('.cancel');
const doneButton = $('.done');


const handleCreate = () => gsap.to('.pop',{autoAlpha:1});
const handleClick = (e) => {
    e.stopPropagation();
    gsap.to('.pop',{autoAlpha:0});
}
const handleDone = (e) => {
    e.preventDefault();
    const name = $('#nameField').value;
    const email = $('#emailField').value;
    const site = $('#siteField').value;

    //post 통신


    //1. name,email,site 담고있는 객체 생성
    const user = {name,email,site};

    //2. post 통신의 body에 객체 전달
    min.post(END_POINT,user).then(() => {

        
        //3. 유저 목록 지우기
        clearContents(userCardInner)
        
        //4. 유저 목록 렌더링하기
        renderUserList();

        //5. 팝업창 닫기
        gsap.to('.pop',{autoAlpha:0})
    })

}
createButton.addEventListener('click',handleCreate);
cancelButton.addEventListener('click',handleClick);
doneButton.addEventListener('click',handleDone);