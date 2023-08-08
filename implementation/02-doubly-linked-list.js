
class DoublyLinkedNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
  addToHead(val){
    const newNode = new DoublyLinkedNode(val)
    if (!this.head) {
      this.tail = newNode
      this.head = newNode
    } else {

    newNode.next = this.head
    this.head.prev = newNode
    this.head = newNode


    }
  this.length++
  return this
  }
  peekAtHead(){
    if(!this.tail) return undefined
    return this.head.value
  }
  removeFromHead(){
    if(!this.head) return undefined
    const val = this.head.value
    if(this.head === this.tail){
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next
      this.head.prev = null
    }
    this.length--
    return val

  }
  addToTail(val){
    const newNode = new DoublyLinkedNode(val)
    if(!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.prev = this.tail
      this.tail.next = newNode
      this.tail =  newNode
    }
    this.length++
    return this

  }
  peekAtTail(){
    if(!this.head) return undefined
    return this.tail.value
  }
  removeFromTail(){
    if(!this.tail) return undefined
    const val = this.tail.value
    if(this.head === this.tail){
      this.head = null
      this.tail = null
    } else {
      this.tail = this.tail.prev
      this.tail.next = null
    }
    this.length--
    return val
  }
}
module.exports = {
  DoublyLinkedList,
  DoublyLinkedNode
}
