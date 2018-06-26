/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const rightSideView = function(root) {
    
  function traverse (node) {
      if (!node) return [];
      const value = node.val;
      const rightData = traverse(node.right);
      const leftData = traverse(node.left);
      return [value, ...rightData.concat(leftData.slice(rightData.length))];
  }
  return traverse(root);
};

export default rightSideView;