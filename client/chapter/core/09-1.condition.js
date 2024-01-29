/* ---------------- */
/* Condition        */
/* ---------------- */

// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

// 영화 봤니?

// let didWatchMovie = confirm('영화 봤니?');
// if(didWatchMovie == 1){
//     let goingToWatchMovie = confirm("which one?");
//     if(goingToWatchMovie == 1){
//         alert("Congratulation!!")
//     }else{
//         alert("Okay");
//     }
// }else if(didWatchMovie == 0){
//     document.querySelector("h1").innerText = "No!!";
// }

// 영화 볼거니?


// if 문(statement)

// else 절(caluse)

// else if 복수 조건 처리

// 조건부 연산자

// 멀티 조건부 연산자 식

function render(node,isActive){
    const template = /* html */`
      <div>${ isActive ? '안녕!!!!' : '잘가~~!!!' }</div>
    `
    node.insertAdjacentHTML('beforeend',template);
    
  }