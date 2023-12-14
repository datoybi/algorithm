class Element {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(element, priority) {
    // 데이터 삽입
    const qElement = new Element(element, priority);
    let contain = false;

    for (let i = 0; i < this.queue.length; i++) {
      if (qElement.priority < this.queue[i].priority) {
        this.queue.splice(i, 0, qElement);
        contain = true;
        break;
      }
    }

    if (!contain) {
      this.queue.push(qElement);
    }
  }

  dequeue() {
    // 맨앞 데이터 삭제
    if (this.isEmpty()) return null;
    return this.queue.shift();
  }

  front() {
    // 가장 높은 순위의 원소 반환
    if (this.isEmpty()) return "No elements in Queue";
    return this.queue[0];
  }

  rear() {
    // 가장 낮은 순위의 원소 반환
    if (this.isEmpty()) return "No elements in Queue";
    return this.queue[this.queue.length - 1];
  }

  isEmpty() {
    // 비어있는지 반환 true false
    return this.queue.length == 0;
  }

  printPQueue() {
    let str = "";
    for (let i = 0; i < this.queue.length; i++)
      str += this.queue[i].element + " ";
    return str;
  }
}

var priorityQueue = new PriorityQueue();
console.log(priorityQueue.isEmpty());
console.log(priorityQueue.front());

// adding elements to the queue
priorityQueue.enqueue("a", 2);
priorityQueue.enqueue("b", 1);
priorityQueue.enqueue("c", 1);
priorityQueue.enqueue("d", 2);
priorityQueue.enqueue("e", 3);

console.log(priorityQueue.printPQueue());
console.log(priorityQueue.front().element);
console.log(priorityQueue.rear().element);
console.log(priorityQueue.dequeue().element);
priorityQueue.enqueue("f", 2);

console.log(priorityQueue.printPQueue());
