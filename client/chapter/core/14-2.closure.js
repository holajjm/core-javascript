const first = document.querySelector(".first");
const span = document.querySelectorAll("span");


const handleClick = (() => {
    let isClicked = false;
    return function(){
        if(!isClicked){
            document.body.style.backgroundColor = 'orange';
            span.style.color = 'white';
        }else{
            document.body.style.backgroundColor = 'white',
            span.style.color = 'black';
        }
        isClicked = !isClicked;
    }

})()

span.addEventListener('click', handleClick);



function useState(initValue){
    let value = initValue;
    function state(){
        return value;
    }
    function setState(newValue){
        value = newValue;
    }
    return [state, setState]
}

const [atate, setState] = useState(111)