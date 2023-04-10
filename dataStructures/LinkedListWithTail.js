class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    print() {
        if(this.isEmpty()) {
            console.log('List is empty')

        } else {
            let curr = this.head
            let listValue = ''
            while(curr) {
                listValue += `${curr.value}`
                curr = curr.next
            }
            console.log(listValue)
        }
    }

    prepend(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++

    }

    append(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
            this.tail = node
        } else {
            this.tail.next = node
            this.tail = node
        }
        this.size++
    }

    removeFromFront() {

    }

    removeFromEnd() {

    }
}


const list = new LinkedList()
console.log('List is empty? ', list.isEmpty())
console.log('List size ', list.getSize())
list.print()

list.insert(10, 0)


list.insert(20, 0)


list.insert(30, 1)

list.insert(40, 2)
list.print()

list.reverse()
list.print()
