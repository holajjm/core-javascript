/* ---------------- */
/* Switch           */
/* ---------------- */



const value = 10;

// switch(value) {
//     case 10: 
//         console.log('this is 10'); break;
//     case 20:
//         console.log('this is 20'); break;
//     default:
//         console.log('i don know')
// }

const MORNING    = '아침',
      LUNCH      = '점심',
      DINNER     = '저녁',
      NIGHT      = '밤',
      LATE_NIGHT = '심야',
      DAWN       = '새벽';

let thisTime;


/* 다양한 상황에 맞게 처리 --------------------------------------------------- */

// 조건 유형(case): '아침'
// '뉴스 기사 글을 읽는다.'

// 조건 유형(case): '점심'
// '자주 가는 식당에 가서 식사를 한다.'

// 조건 유형(case): '저녁'
// '동네 한바퀴를 조깅한다.'

// 조건 유형(case): '밤'
// '친구에게 전화를 걸어 수다를 떤다.'

// 조건 유형(case): '심야'
// 조건 유형(case): '새벽'
// '한밤 중이거나, 새벽이니 아마도 꿈나라에 있을 것이다.'


/* switch문 → if문 변환 --------------------------------------------------- */

// if(thisTime === MORNING){
//     console.log('디스코드를 켠다')
//   }else if(thisTime === LUNCH){
//     console.log('체력 보충을 위한 잠을 잔다.')
//   }else if(thisTime === DINNER){
//     console.log('회고조 팀원들끼리 코드리뷰')
//   }else if(thisTime === NIGHT){
//     console.log('내일을 위한 체력을 위해 잠을 잔다.')
//   }else if(thisTime === LATE_NIGHT || thisTime === DAWN){
//     console.log('내일의 수업을 위한 info글 읽다가 잠이 들어');
//     console.log('꿈속에서 에러를 해결하는 나의 모습을 찾는다.');
// }

/* switch vs. if -------------------------------------------------------- */



// const num = prompt("put in Number please");
// switch(num){
//     case 0: console.log('sun'); break;
//     case 1: console.log('mon'); break;
//     case 2: console.log('tue'); break;
//     case 3: console.log('wed'); break;
//     case 4: console.log('thu'); break;
//     case 5: console.log('fri'); break;
//     case 6: console.log('sat'); break;
// }


const num = (n) => {
    return Math.floor(Math.random() * n);
}

function getDay(num){
    switch(num){
        case 0: return('sun');
        case 1: return('mon');
        case 2: return('tue');
        case 3: return('wed');
        case 4: return('thu');
        case 5: return('fri');
        case 6: return('sat');
    }
}

getDay(num());

function weekend() {
    const today = getDay(num(7));
    if(today.includes('sat ') || today.includes('sun')){
        console.log(`Today is ${today} in weekend`);
    }else {
        console.log('today is week');
    }
}
weekend();