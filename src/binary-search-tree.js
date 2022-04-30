const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }
}
class BinarySearchTree {
  constructor() {
    this.core = null
  }

  root() {
    return this.core
  }

  add(data) {
    if (!data) return 
    this.core = addWithin(this.core, data)

    function addWithin(node, data) {
      if (!node) return new Node(data)
      if (node.data === data) return node
      if (node.data > data) {
        node.left = addWithin(node.left, data)
      } else {
        node.right = addWithin(node.right, data)
      }
      return node
    }
    }

  has(data) {
    return searchWithin(this.core, data)

    function searchWithin(node, data) {
      if (!node) return false
      if (node.data === data) return true
      return data < node.data ?
        searchWithin(node.left, data) :
        searchWithin(node.right, data)
    }
  }

  find(data) {
    // node = this.core
    // if (node === null) {
    //   return null
    // } else if (node.data > data) {
    //   return this.find(node.left, data)
    // } else if (data > node.data) {
    //   return this.find(node.right, data)
    // } else {
    //   return node
    // }
    let current = this.core
    while (current.data !== data) {
      if (current === null) return null
      if (data < current.data) {
        current = current.left
      } else {
        current = current.right
      }
    }
    return current
  }

  remove(data) {
    this.core = removeNode(this.core, data)

    function removeNode(node, data) {
      if (!node) return null
      if (node.data > data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (node.data < data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) return null
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let minFromRight = node.right
        while (minFromRight.left) {
          minFromRight = minFromRight.left
        }
        node.data = minFromRight.data
        node.right = removeNode(node.right, minFromRight.data)
        return node
      }
    }
  }

  min() {
    if (!this.core) return
    let node = this.core
    while (node.left) {
      node = node.left
    }
    return node.data
  }

  max() {
    if (!this.core) return
    let node = this.core
    while (node.right) {
      node = node.right
    }
    return node.data
  }
}
const tree = new BinarySearchTree()
tree.add(8)
tree.add(7)
tree.add(9)
tree.add(5)
tree.add(10)
tree.add(20)
tree.add(6)
tree.add(11)
console.log(tree)
module.exports = {
  BinarySearchTree
};