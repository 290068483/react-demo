function queue() {
    let items = [];
    //排队是在后面排的，后来的排在后面
    this.enqueue = (org) => {
        items.push(org)
    }
    this.show = ()=>{
        console.log(items)
    }
//print
    this.print = function () {
        console.log(items.toString());
    }; 
    
    this.isEmpty=()=>{
        return items.length ==0
    }
    // 队列跟排队一样，先排的先出去，出去就是删除
    this.dequeue = function () {
        return items.shift();
    }; 

    //头元素
    this.front = function () {
        return items[0];
    }; 
    //
    this.size = function () {
        return items.length;
    }; 
}
let q = new queue();
q.isEmpty();
q.print();
q.enqueue("aa");
q.enqueue("ab");
q.enqueue('ac')
q.print(q.size())
console.log(q.size())
console.log(q.front())
q.dequeue();
console.log(q.size())
console.log(q.show())
