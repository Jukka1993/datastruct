var createBinaryTree = require("./binaryTree");
var traversalBinaryTree = require("./traversalBinaryTree");

var tree = createBinaryTree("ABDG##H###CE#I##F##");
// var tree = createBinaryTree("ABD###C##");

console.log(tree);
// console.log(tree.right);
// var tree = createBinaryTree("AB#D##C##");
// console.log(tree);
console.log("**************************");
traversalBinaryTree.preOrderTraversal(tree);    //ABDC
console.log("**************************");
traversalBinaryTree.inOrderTraversal(tree);     //BDAC
console.log("**************************");
traversalBinaryTree.postOrderTraversal(tree);   //DBCA
console.log("**************************");
traversalBinaryTree.floorOrderTraversal(tree);

