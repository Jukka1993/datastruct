var createBinaryTree = require("../../binarytree/binaryTree.js");
const temp = [];
temp.push(5);
temp.push("#");
temp.push("#");
var tree = createBinaryTree(temp);
console.log(tree);

function find(tree, val) {
    if (tree === null) {
        return null;
    }
    if (tree.val === val) {
        return tree;
    }
    if (val > tree.val) {
        return find(tree.right, val);
    }
    if (val < tree.val) {
        return find(tree.left, val);
    }
}
function findMax(tree) {
    if (tree.right !== null) {
        return findMax(tree.right);
    } else {
        return tree.val;
    }
}
function findMin(tree) {
    if (tree.left !== null) {
        return findMin(tree.left);
    } else {
        return tree.val;
    }
}
function remove(tree, val) {
    return removeNode(tree, val);
}
function removeNode(tree, val) {
    if (tree === null) {
        return null;
    }
    if (tree.val === val) {
        if (tree.left === null && tree.right === null) {
            return null;
        }
        if (tree.left === null) {
            return tree.right;
        }
        if (tree.right === null) {
            return tree.left;
        }
        var rightMinNode = findMin(tree.right);
        tree.val = rightMinNode;
        tree.right = removeNode(tree.right, rightMinNode);
        return tree;
    } else {
        if (val > tree.val) {
            tree.right = removeNode(tree.right, val);
            return tree;
        } else {
            tree.left = removeNode(tree.left, val);
            return tree;
        }
    }
}
//定义一下结点情况
//0为叶子结点
//-1为有左子树
//1为有右子树
//2为左右子树都有
// function del(tree, num) {
//     var node = find(tree, num);
//     if (node === null) {
//         return false;
//     }
//     if (node.left === null && node.right === null) {
//         //这里反而麻烦了,没有父亲结点啊
//     } else if (node.left === null) {

//     } else if (node.right === null) {

//     }
// }
function insert(tree, num) {
    if (tree === null) {
        return false;
    }
    if (num === tree.val) {
        return false;
    }
    if (num > tree.val) {
        if (tree.right !== null) {
            return insert(tree.right, num);
        } else {
            tree.right = { val: num, left: null, right: null };
            return true;
        }
    }
    if (num < tree.val) {
        if (tree.left !== null) {
            return insert(tree.left, num);
        } else {
            tree.left = { val: num, left: null, right: null };
            return true;
        }
    }
}
var temp1 = [1, 7, 6, 0, 9, 2, 3];
temp1.forEach((val) => {
    insert(tree, val);
});
console.log(tree);
console.log(tree.left);
console.log(tree.right);
console.log(findMax(tree));
console.log(findMin(tree));
console.log("********************");
var newTree = remove(tree, 5);  //3 0 2 1 9 7 6 5
console.log(newTree);
