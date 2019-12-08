var createBinaryTree = require("../../binarytree/binaryTree");
// var traversal = require("../../binarytree/traversalBinaryTree");
var treeStr = "ABD##EF#G###CH#J##I##";
var tree = createBinaryTree(treeStr);
function traverLeaf (root){
    if(root !== null){
        if(root.left === null && root.right === null){
            console.log(root.val);
        }
        traverLeaf(root.left);
        traverLeaf(root.right);
    }
}
traverLeaf(tree);

// console.log(tree);
// console.log(tree.left.right);
// console.log(tree.right.left);
