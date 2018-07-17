function reverse<T>(items: T[]): T[] {
  let reversedItems: T[] = [];

  for (let i = items.length - 1; i >= 0; i--) {
    reversedItems.push(items[i]);
  }

  return reversedItems;
}

const numbers: number[] = [1, 2, 3];

console.log('input:', numbers);
const r1 = reverse<number>(numbers);
console.log('result:', r1);

const strings: string[] = ['hari', 'krish', 'shiv'];

console.log('input:', strings);
const r2 = reverse<string>(strings);
console.log('result:', r2);
