/**
 * BinaryTreeNode
 * @param {*} val 
 */
function BinaryTree(val){
    this.val = val
    this.left = null;
    this.right = null;
}
/**
 * Iterator
 * @param {String|Array}} params 
 */
function Iterator(params){
    this.cursor = 0;
    this.params = params;
    this.getNext = function(){
        return this.params[this.cursor++];
    }
}
/**
 * 
 * @param {BinaryTree} root 
 * @param {Iterator} iterator 
 * @param {boolean} isLeft 
 */
function doCreate(root,iterator,isLeft){
    var val = iterator.getNext();
    if(val === "#"){
        return;
    } else {
        if(isLeft){
            root.left = new BinaryTree(val);
            doCreate(root.left,iterator,true);
            doCreate(root.left,iterator,false);
        } else {
            root.right = new BinaryTree(val);
            doCreate(root.right,iterator,true);
            doCreate(root.right,iterator,false);
        }
    }
}
/**
 * create binary tree user a Extended binary tree whose leafs is "#"
 * @param {String|Array} str string or array
 */
function createBinaryTree(params){
    const iterator = new Iterator(params);
    var val = iterator.getNext();
    if(val === "#"){
        return null;
    }
    var root = new BinaryTree(val);
    doCreate(root,iterator,true);
    doCreate(root,iterator,false);
    return root;
}

module.exports = createBinaryTree;