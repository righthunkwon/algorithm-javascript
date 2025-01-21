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
    this.length = 0;
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
   * @getLength
   * 현재 LinkedList의 길이 반환
   *
   */
  getLength() {
    return this.length;
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
    this.length++;

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
    this.length--;
  }
}

const linkedList = new LinkedList();

for (let i = 1; i <= input; i++) {
  linkedList.push(i);
}

while (true) {
  // 종료조건
  if (linkedList.getLength() <= 1) {
    break;
  }

  // 반복수행
  linkedList.shift();
  linkedList.push(linkedList.getHead());
  linkedList.shift();
}
console.log(linkedList.getHead());
