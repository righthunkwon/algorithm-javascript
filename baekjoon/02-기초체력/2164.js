const filePath = process.platform === 'linux' ? '/dev/stdin' : 'tc.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  /**
   * @getHead
   * 현재 LinkedList의 맨 앞 값 반환
   *
   */
  getHead() {
    return this.head.value;
  }

  /**
   * @getSize
   * 현재 LinkedList의 길이 반환
   *
   */
  getSize() {
    return this._size;
  }

  /**
   * @push
   * LinkedList의 마지막에 새로운 값 추가
   *
   */
  push(value) {
    const newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this._size++;

    return newNode;
  }

  /**
   * @shift
   * LinkedList의 맨 앞의 값(head) 제거
   *
   */
  shift() {
    this.head = this.head.next;
    this.head.prev = null;
    this._size--;
  }
}
