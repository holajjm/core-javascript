/* ------------------- */
/* Logical Operators   */
/* ------------------- */

let a = 10;
let b = '';
let value = Boolean(b);

// 논리곱(그리고) 연산자
let AandB = a && b;

// 논리합(또는) 연산자
let AorB = a || b;

// 부정 연산자
let reverseValue = !a;

// 논리합 할당 연산자(logical or assignment)

// a = a || b;
// -> a ||= b;

// 조건 처리

// 첫번째 Falsy를 찾는 연산 (&&)
let whichFalsy = true && ' ' && [] && {};

// 첫번째 Truthy를 찾는 연산 (||)
let whichTruthy = false || '' || [2,3].length || {};







let username = prompt("사용자 이름을 입력해주세요");
if(username == "Admin"){
    let pass = prompt('비밀번호:', '');
    if(pass == "TheMaster"){
        alert("환영합니다!");
    }else if(pass == '' || pass == null){
        alert("취소되었습니다.");
    }else{
        alert("인증에 실패하였습니다.")
    }
}else if(username == '' || username == null){
    alert("취소되었습니다.");
}else {
    alert("인증되지 않은 사용자입니다.");
}