class Stack<T> {
    private Items: T[] = []

    push(item: T): void {
        this.Items.push(item)
    }

    pop(): T | undefined {
        return this.Items.pop()
    }

    peek(): T | undefined {
        return this.Items[this.Items.length - 1];
    }

    isEmpty(): boolean {
        return this.Items.length === 0 
    }

}

const stack = new Stack()
stack.push(30)
stack.push(10)

console.log(stack.pop())
console.log(stack.peek())
