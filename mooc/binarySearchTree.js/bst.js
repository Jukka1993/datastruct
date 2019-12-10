var createTree = require("./../../binarytree/binaryTree.js")
var tree = createTree("760#521##3#4####98###");
// var tree = createTree("5##");
console.log("AAA",tree);
function find(tree,val){
    if(tree.val === val){
        return tree;
    }
    if(val > tree.val){
        return find(tree.right,val);
    } else {
        return find(tree.left,val);
    }
}
function insert(tree,val){
    if(tree.val === val){
        return;
    }
    if(val > tree.val){
        if(tree.right === null){
            tree.right = {val:val,left:null,right:null};
        } else {
            insert(tree.right,val);
        }
    } else {
        if(tree.left === null){
            tree.left = {val:val,left:null,right:null};
        } else {
            insert(tree.left,val);
        }
    }
}
function getMax(tree){
    if(tree.right === null){
        return tree.val;
    }
    return getMax(tree.right);
}
function getMin(tree){
    if(tree.left === null){
        return tree;
    }
    return getMin(tree.left);
}
function remove(tree,val){
    return removeNode(tree,val);
}
//removeNode返回一颗处理完成之后的树的根结点
function removeNode(tree,val){
    if(tree === null){
        return null;
    }
    if(tree.val === val){
        if(tree.left === null && tree.right === null){
            return null;
        }
        if(tree.left === null){
            return tree.right;
        }
        if(tree.right === null){
            return tree.left;
        }
        var rightMinNode = getSmallest(tree.right);
        tree.val = rightMinNode.val;
        tree.right = removeNode(tree.right,rightMinNode.val);
        return tree;
    } else if(tree.val < val){
        tree.right = removeNode(tree.right,val);
        return tree;
    } else {
        tree.left = removeNode(tree.left,val);
        return tree;
    }
}
var temp = remove(tree,"2");
console.log("temp=",temp);

console.log("BBBB",tree);
