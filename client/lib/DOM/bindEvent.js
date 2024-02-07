function bindEvent(node,type,func){
    if(typeof node === 'string') node = getNode(node);
    node.addEventListener(type, func);
    return () => node.removeEventListener(type, func);
}