// function getAttr(node,prop){
//     if(typeof node === 'string') node = getNode(node);
//     if(typeof prop !== 'string') throw new Error('error');
//     return node.getAttribute(prop)
// }

// function setAttr(node, prop, value){
//     if(typeof node === 'string') node = getNode(node);
//     if(typeof prop !== 'string' || typeof value !== 'string') throw new TypeError('error');
//     if(!value) throw new Error('error');
//     node.setAttribute(prop,value);
// }

// const attr = (node, prop, value) => !value ? getAttr(node,prop) : setAttr(node,prop,value)


const attr = (function(){
    function getAttr(node,prop){
        if(typeof node === 'string') node = getNode(node);
        if(typeof prop !== 'string') throw new Error('error');
        return node.getAttribute(prop)
    }
    function setAttr(node, prop, value){
        if(typeof node === 'string') node = getNode(node);
        if(typeof prop !== 'string' || typeof value !== 'string') throw new TypeError('error');
        if(!value) throw new Error('error');
        node.setAttribute(prop,value);
    }
    const attr = (node, prop, value) => !value ? getAttr(node,prop) : setAttr(node,prop,value)

    return attr;
    
})()