class MyList<T> {
  constructor(private list: T[]) {}

  push(item: T) {
    this.list.push(item);
  }
  pop() {
    return this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

const myList = new MyList([1, 2, 3]);
myList.push(1);

const list = new Array();
