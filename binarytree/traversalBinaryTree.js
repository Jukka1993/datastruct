function preOrderTraversal(root){
    if(root !== null){
        console.log(root.val);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }
}
function inOrderTraversal(root){
    if(root !== null){
        inOrderTraversal(root.left);
        console.log(root.val);
        inOrderTraversal(root.right);
    }
}
function postOrderTraversal(root){
    if(root !== null){
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.val);
    }
}
function doFloorOrderTraversal(queue){
    if(queue.length === 0){
        return;
    }
    var head = queue.shift();
    console.log(head.val);
    if(head.left !== null){
        queue.push(head.left);
    }
    if(head.right !== null){
        queue.push(head.right);
    }
    doFloorOrderTraversal(queue);
}
function floorOrderTraversal(root){
    var queue = [];
    queue.push(root);
    doFloorOrderTraversal(queue);
}
exports.preOrderTraversal = preOrderTraversal;
exports.inOrderTraversal = inOrderTraversal;
exports.postOrderTraversal = postOrderTraversal;
exports.floorOrderTraversal = floorOrderTraversal;