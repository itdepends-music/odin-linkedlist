class LinkedList {
    constructor() {
        this.firstNode = null;
    }

    append(value) {
        if (this.firstNode === null) {
            this.firstNode = new Node(value);
            return;
        }

        let curNode = this.firstNode;
        while (curNode.nextNode !== null) {
            curNode = curNode.nextNode;
        }

        curNode.nextNode = new Node(value);
    }

    prepend(value) {
        this.firstNode = new Node(value, this.firstNode);
    }

    size(value) {
        let size = 0;
        let curNode = this.firstNode;
        while (curNode !== null) {
            size++;
            curNode = curNode.nextNode;
        }

        return size;
    }

    head() {
        return this.firstNode;
    }

    tail() {
        if (this.firstNode === null) return null;

        let curNode = this.firstNode;
        while (curNode.nextNode !== null) {
            curNode = curNode.nextNode;
        }

        return curNode;
    }

    at(index) {
        let curNode = this.firstNode;
        for (let i = 0; i < index; i++) {
            if (curNode === null) return null;
            curNode = curNode.nextNode;
        }

        return curNode;
    }

    pop() {
        if (this.firstNode === null) return;

        if (this.firstNode.nextNode === null) {
            this.firstNode = null;
            return;
        }

        let curNode = list.firstNode;
        while (curNode.nextNode.nextNode !== null) {
            curNode = curNode.nextNode;
        }

        curNode.nextNode = null;
    }

    contains(value) {
        let curNode = list.firstNode;
        while (curNode !== null) {
            if (curNode.value === value) return true;
            curNode = curNode.nextNode;
        }

        return false;
    }

    find(value) {
        let curNode = list.firstNode;
        let index = 0;
        while (curNode !== null) {
            if (curNode.value === value) return index;
            curNode = curNode.nextNode;
            index++;
        }

        return null;
    }

    toString() {
        let valueStrings = [];

        let curNode = this.firstNode;
        while (curNode !== null) {
            valueStrings.push(`( ${curNode.value} )`);
            curNode = curNode.nextNode;
        }

        return valueStrings.join(' -> ');
    }

    insertAt(value, index) {
        if (index === 0) {
            this.firstNode = new Node(value, this.firstNode);
            return;
        }

        if (this.firstNode === null) this.firstNode = new Node();

        let curNode = this.firstNode;
        for (let i = 0; i < index - 1; i++) {
            if (curNode.nextNode === null) {
                curNode.nextNode = new Node();
            }
            curNode = curNode.nextNode;
        }

        curNode.nextNode = new Node(value, curNode.nextNode);
    }

    removeAt(index) {
        if (this.firstNode === null) return;
        if (index === 0) {
            this.firstNode = this.firstNode.nextNode;
            return;
        }

        let curNode = this.firstNode;
        for (let i = 0; i < index - 1; i++) {
            if (curNode.nextNode === null) return;
            curNode = curNode.nextNode;
        }

        if (curNode.nextNode === null) return;
        curNode.nextNode = curNode.nextNode.nextNode;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

list = new LinkedList();
list.append(1);
//list.append(2);
//list.append(3);
list.removeAt(1);
console.log(list.toString());
