//모듈 프로그래밍 사용해서

import jujeobData from "./data/data.js";
import {
    shake,
    getNode,
    getRandom, 
    clearContents, 
    insertLast,
    showAlert,
    copy
} from "./lib/index.js";



//[phase-1]
//1. 주접 떨기 버튼을 클릭할 수 있는 핸들러 연결
//2. input 값을 콘솔에 가져오기
//3. jujeob 데이터 가져오기
// 4. jujeobData 함수에 input.value를 넣기
// 5. 랜덤한 주접 한 개를 고르기

const submit = getNode('#submit');
const nameField = getNode('#nameField');
const result = getNode('.result');
const alertError = getNode('.alert-error');
const alertSuccess = getNode('.alert-success');



function handleJujeob(e){
    e.preventDefault();
    const name = nameField.value;
    const list = jujeobData(name);
    const pick = list[getRandom(list.length)]
    // jujeobData(nameField.value)[Math.floor(Math.random() * 9)]

    if(!name || name.replace(/\s*/g,'') === '') {
        alertError.classList.add('is-active');
        setTimeout(() => {alertError.classList.remove('is-active')},2000);
        shake.restart();
        return
    }

    if(!isNaN(+name)){
        showAlert('.alert-error','이름을 입력해주세요',2000);
        shake.restart();
        return;
    }
    


    clearContents('.result');
    // result.insertAdjacentHTML('beforeend', pick)
    insertLast('.result',pick)

}


submit.addEventListener('click', handleJujeob);


function handleCopy(){
    alertSuccess.classList.add('is-active');
    setTimeout(() => {alertSuccess.classList.remove('is-active')},2000);
    const text = this.textContent;
    if(!nameField.value) return;
    copy(text).then(() => {
        showAlert('.alert-success','클립보드 복사 완료!')
    })
}

result.addEventListener('click', handleCopy)


// [phase-2]
// 1. 아무 값도 입력 받지 못했을 때 예외처리(alert)





