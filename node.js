const prompt = require("prompt-sync")({ sigint: true });

class Node {
  constructor(year, highlight, next = null) {
    this.year = year;
    this.highlight = highlight;
    this.next = next;
  }
}

class LinkedList {
  constructor(year, highlight) {
    this.head = new Node(year, highlight);
  }

  insertBeginning = (year, highlight) => {
    const newNode = new Node(year, highlight, this.head);
    this.head = newNode;
  };

  traverse = () => {
    let current = this.head;
    while (current) {
      console.log(`year: ${current.year}, highlight: ${current.highlight}`);
      current = current.next;
    }
  };

  insert = (year) => {
    let current = this.head;
    while (current.year > year) {
      let currentyear = current.year - 1;
      if (current.next && current.next.year === currentyear) {
        current = current.next;
      } else {
        let highlight = prompt(
          `What was the highlight for year ${currentyear} ?`
        );
        let newNode = new Node(currentyear, highlight, current.next);
        current.next = newNode;
        current = newNode;
      }
    }
  };
}

const info3 = new LinkedList(1, "Born");
info3.insertBeginning(3, "Started Walking");
info3.insertBeginning(7, "Turned Seven");
info3.traverse();

const year = prompt("How old r u?");
info3.insert(year);
info3.traverse();
