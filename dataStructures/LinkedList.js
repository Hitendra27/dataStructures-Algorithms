class Node{
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.size = 0
    }

    isEmpty() {
        return this.size === 0
    }

    getSize() {
        return this.size
    }

    prepand(value) {
        const node = new Node(value)
        if(this.isEmpty()) {
            this.head = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.size++
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
}


const list = new LinkedList()
console.log('List is empty? ', list.isEmpty())
console.log('List size ', list.getSize())
list.print()

list.prepand(10)
list.print()

list.prepand(20)
list.prepand(30)
list.print()
