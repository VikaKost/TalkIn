class Node {
  constructor(value) {
    this.next = null;
    this.value = value;
  }

}

class List {
  constructor(value){
    this.root = new Node(value);
  }

  print(){
    let temp = this.root;
    while (temp.next !== null) {
      console.log(temp.value);
      temp = temp.next;
    }
    console.log(temp.value);
  }
  addNode(value, i) {
    let newNode = new Node(value);
    let temp = this.root;
    let nextNode;
    if (!i){
      while (temp.next !== null) {
        temp = temp.next;
      }
      temp.next = newNode;
      return true;
    }
    for (let j = 0; j < i; j++){
      temp = temp.next;
      if (temp.next === null){
        return false;
      }
    }
    nextNode = temp.next;
      temp.next = newNode;
      newNode.next = nextNode;
    return  true
  }

  removeNode(i) {
    let prevNode;
    let temp = this.root;
    let nextNode;
    if (!i) {
      while (temp.next.next !== null) {
        prevNode=temp.next;
        temp = temp.next;
      }
      prevNode.next = null;
      return true
    }

    for (let j = 0; j <i; j++){
      prevNode = temp;
      temp = temp.next;
      if (temp.next === null){
        return false;
      }
    }
    nextNode = temp.next;
    temp.next = null;
    prevNode.next = nextNode;
    return  true
  }
}

let li = new List(5);
li.addNode(4);
li.addNode(3);
li.addNode(7);
li.addNode(13, 1);
li.addNode(15, 8);
//li.removeNode();
//li.print();