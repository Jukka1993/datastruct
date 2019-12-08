var createBinaryTree = require("../../binarytree/binaryTree");
// var traversal = require("../../binarytree/traversalBinaryTree");
var treeStr = "ABD##EF#G###CH#J##I##";
var tree = createBinaryTree(treeStr);
function calHeight(root){
    if(root === null){
        return 0;
    }
    return Math.max(calHeight(root.left),calHeight(root.right)) + 1;
}
console.log(calHeight(tree));