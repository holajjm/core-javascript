import { getNode } from "./getNode.js"

function clearContents(node){
    if(typeof node === 'string') node = getNode(node);
    if(node.tagName === 'INPUT' || node.tagName === 'TEXTAREA'){
        node.value = ''
        return
    }
    node.textContent = ''
}

export default clearContents;




//named export -> import의 { } 필요
//default export -> import의 { } 불필요