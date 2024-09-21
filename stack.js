class Stack {
    constructor() {
        this.item = []; // initialize with an empty array
    }
    is_empty() {
        return this.item.length === 0;
    }
    push(n) {
        this.item.push(n);
    }
    pop() {
        if (!this.is_empty()) {
            console.log(this.item.pop());
        } else {
            alert("No element is there in the stack");
        }
    }
    peek() {
        if (!this.is_empty()) {
            console.log(this.item[this.item.length - 1]);
        } else {
            alert("No element in the stack to peek");
        }
    }
    size() {
        return console.log(this.item.length);
    }
}


const st = new Stack();
st.push(10);
st.push(20);
st.peek();  // output: 20
st.size();  // output: 2
st.pop();   // output: 20
st.pop();   // output: 10
st.pop();   // alert: no element is there in the stack
