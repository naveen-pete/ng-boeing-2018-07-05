class Queue<T> {
  private data: T[] = [];

  push = (item: T) => this.data.push(item);

  pop = (): T => this.data.shift();
}

const qn = new Queue<number>();
qn.push(1);
const n = qn.pop();
console.log('n:', n);

const qs = new Queue<string>();
qs.push('hari');
const s = qs.pop();
console.log('s:', s);
