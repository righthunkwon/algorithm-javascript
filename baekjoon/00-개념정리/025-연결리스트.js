/**
 * 연결 리스트
 *
 * - 선형적인 데이터 구조
 * - 단일 연결 리스트, 이중 연결 리스트, 원형 연결 리스트 존재
 *
 * - 단일 연결 리스트 : 각 노드는 다음 노드를 가리키는 하나의 포인터만을 가짐
 * - 이중 연결 리스트 : 각 노드는 이전 노드와 다음 노드를 가리키는 두 개의 포인터를 가짐
 * - 원형 연결 리스트 : 이전과 다음 두 개의 포인터를 가지면서 마지막 노드의 포인터가 첫 노드나 특정 노드를 가리킴d
 *
 */

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
