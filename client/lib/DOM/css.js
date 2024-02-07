function getCss(node,prop){
    if(typeof node === 'string') node = getNode(node);
    if(!(prop in document.body.style)) throw new SyntaxError('getCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
    return getComputedStyle(node)[prop]
}

function setCss(node,prop,value){
    if(typeof node === 'string') node = getNode(node);
    if(!(prop in document.body.style)) throw new SyntaxError('setCss 함수의 두 번째 인수는 유효한 css 속성이 아닙니다.');
    if(!value) throw new Error('setCss 함수의 세 번째 인수는 필수 입력값 입니다.');
    node.style[prop] = value;
}

const css = (node,prop,value) => !value ? getCss(node,prop) : setCss(node,prop,value)



//class fucntion

function addClass(node, name){
    if(typeof node === 'string') node = getNode(node);
    if(typeof name !== 'string') throw new Error('Error');
    return node.classList.add(name)
}

function removeClass(node, name){
    if(typeof node === 'string') node = getNode(node);
    if(!name){
        node.className = '';
        return ;
    }
    if(typeof name !== 'string') throw new Error('Error');
    return node.classList.remove(name)
}

function toggleClass(node,name){
    if(typeof node === 'string') node = getNode(node);
    if(typeof name !== 'string') throw new Error('Error');
    return node.classList.toggle(name)
}