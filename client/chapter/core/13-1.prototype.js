/* ----------------------------- */
/* Prototype and inheritance     */
/* ----------------------------- */

// 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


const animal = {
    legs: 4,
    tail: true,
    stomach: [],
    get eat() {
        return this.stomach
    },
    set eat(food){
        this.pray = food;
        this.stomach.push(food)
    }
}

const tiger = {
    patter: '호랑이무늬',
    hunt(target){
        this.pray = target;
        return `${target}에게 조용히 접근`
    }
}
tiger.__proto__ = animal;


const firstTiger = {
    color:'white',
    name: 'first',
    __proto__: tiger
}

const secondTiger = {
    color: 'orange',
    name: 'second',
    __proto__: tiger
}



// 생성자 함수 

function Animal(){
    this.legs = 4;
    this.tail = true;
    this.stomach = [];
  
    this.getEat = function (){
      return this.stomach
    }
    
    this.setEat = function (food){
      this.prey = food;
      this.stomach.push(food)
    }
  
  }
  
  
  const a = new Animal();

  function Tiger(name){
    this.name = name;
    this.pattern = '호랑이무늬';
    this.hunt = function(target){
      this.prey = target
      return `${target}에게 천천히 접근한다.`
    }
  }

  const hanTiger = new Tiger('han');

  console.log(hanTiger)








  function sum(a,b){
    console.log(this)
    console.log(a+b);
  }
  sum.call(123,10,20); // 함수를 바로 실행
  sum.apply('a',[10,20]) // 함수를 바로 실행
  sum.bind('a',10,20) //this를 묶어놓고 실행은 하지 않아서 다른 변수에 할당을 해서 호출하여 사용한다.
  
  const b = sum.bind('a',10,20);
  console.log(b);




  const user = {
    name: 'mike'
  }
  Object.prototype.hasOwnProperty.call(user,'name')


// <teacher>
//   /* ----------------------------- */
// /* Prototype and inheritance     */
// /* ----------------------------- */

// // 프로토타입 상속(prototypal inheritance)을 사용하여 객체를 확장합니다.

// // 여러가지 동물들을 키우는 게임 : 고양이,강아지,호랑이,사자,늑대,여우


// // 동물 → 호랑이 → 어떤 호랑이 

// // getter setter 

// const animal = {
//     legs:4,
//     tail:true,
//     stomach:[],
//     get eat(){
//       return this.stomach
//     },
//     set eat(food){
//       this.prey = food;
//       this.stomach.push(food)
//     }
//   }
  
  
//   const tiger = {
//     pattern: '호랑이무늬',
//     hunt(target){
//       this.prey = target;
//       return `${target}에게 조용히 접근합니다.`
//     },
//     __proto__: animal
//   }
  
//   // tiger.__proto__ = animal
  
  
  
//   const 백두산호랑이 = {
//     color: 'white',
//     name: '백랑이',
//     __proto__: tiger
//   }
  
  
//   const 용마산호랑이 = {
//     color: 'greenyellow',
//     name: '선돌이',
//     __proto__: tiger
//   }
  
  
  
  
  
//   // 생성자 함수 
  
  
  
  
//   function Animal(){
//     this.legs = 4;
//     this.tail = true;
//     this.stomach = [];
  
//     this.getEat = function (){
//       return this.stomach
//     }
    
//     this.setEat = function (food){
//       this.prey = food;
//       this.stomach.push(food)
//     }
//   }
  
  
//   const a = new Animal();
  
  
//   function Tiger(name){
//     Animal.call(this)
//     this.name = name;
//     this.pattern = '호랑이무늬';
//     this.hunt = function(target){
//       this.prey = target
//       return `${target}에게 천천히 접근한다.`
//     }
//   }
  
  
//   // Tiger.prototype = a
  
//   const 한라산호랑이 = new Tiger('한돌이');
  
  
  
  
  
  
  
  
  
  
  
  
  
  
//   // call, apply, bind 함수의 메서드 
  
//   // this를 전달해줄 수 있음.
  
  
//   function sum(a,b){
  
//     console.log(this)
//     console.log(a + b);
//   }
  
  
//   // 대신 실행함  매개변수 어떻게 받음?
  
//   // 바로 실행 
  
//   // sum.call('a',10,20)
//   // sum.apply('a',[10,20])
  
  
  
//   const aa = sum.bind('a',10,30);
//   // debounce, throttle
  
//   // button.addEventListener('click',sum.call)
  
  
  
  
  
  
  
  
  
  
  
  
//   const user = {
//     name:'tiger'
//   }
  
//   // user.hasOwnProperty('name')
//   // Object.prototype.hasOwnProperty.call(user,'name')
  