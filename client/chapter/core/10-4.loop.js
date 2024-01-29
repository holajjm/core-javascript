/* ---------------- */
/* For In Loop      */
/* ---------------- */



const js = {
    creator: 'Brendan Eich',
    createAt: '1995.05',
    standardName: 'ECMAScript',
    currentVersion: 2023,
  };
  
  
  // 객체의 속성(property) 포함 여부 확인 방법

  const key = 'valueOf';

  console.log(key in js); // 대상에 찾는 key 값이 없더라도 부모까지 올라가서 찾아내어 값을 반환하는 단점이 있다. 위의 변수 같은 경우 부모인 객체(prototype =object)까지 올라가서 찾아낸다.

  // - 모든 객체가 사용 가능하도록 속성이 확장되었을 때 포함 여부 결과는?

  //javascript는 hasOwnProperty를 보호해주지 않는다.
  //생성된 객체의 method는 불안하다.(내장 객체의 불안정성) => 진짜 객체의 능력을 쓰는 것이 낫다
  console.log(js.hasOwnProperty(key));
  Object.prototype.hasOwnProperty.call(js,key); // 조상 객체
  ({}).prototype.hasOwnProperty.call(js,key); // 생성된 객체


  const list = document.querySelectorAll("span");
  console.log(list);
  
  // 객체 자신의 속성인지 확인하는 방법
  // - "자신의 속성을 가지고있는지 확인 방법"이 덮어쓰여질 수 있는 위험에 대처하는 안전한 방법은?
  
  
  // for ~ in 문
  // - 객체 자신의 속성만 순환하려면?
  // - 배열 객체 순환에 사용할 경우?

  for(let key in js){
    console.log(key);
  }

  Object.defineProperty(obj,'key1', {
    enumerable: false,
    value: 'kindtiger'
  })






  const tens = [10,100,1000,10000];
  for(let key in tens){
    console.log(key);
  }