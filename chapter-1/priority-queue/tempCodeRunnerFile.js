function PriorityQueue() {
    let items = [];

    function QueueElement(element, priority) {
        this.element = element;
        this.priority = priority;
    }
    this.enqueue = (element, priority) => {
        let queueElement = new QueueElement(element, priority)

        let added = false;
        for (let i = 0; i < items.length; i++) {
            if (queueElement.priority < items[i].priority) {
                items.splice(i, 0, queueElement)
                added = true;
                break;
            }
        }
        if (!added) items.push(queueElement)
    }
    this.print = () => {
        items.map((e, i) => {
            console.log(`items:${e.element}---${e.priority}`)
        })
    }
}
let p = new PriorityQueue();
p.enqueue('张三', 4)
p.enqueue('王五', 2)
p.enqueue('里斯', 1)
p.print();
p.enqueue('堂堂', 1)
p.print();

