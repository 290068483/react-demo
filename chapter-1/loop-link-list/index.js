function LoopLinkList() {
    let head, tail, point, previous; 
    this.length = 0; 
    let Node = function (element) {
        this.element = element; 
        this.next = null; 
        this.prev = null; 
    }

    // 删除某个元素
    this.remove = (ele) =>  {
        debugger;
        return this.removeAt(this.indexOf(ele))
    }
    // 根据positon 删除ele
    this.removeAt = (position) =>  {
        if (position >= 0 && position < this.length) {
            let previous,index=0;
            point = head; 
            if (position === 0) {
                head = point.next; 
            }else {
                while(index++ <position){
                    previous = point;
                    point = point.next;
                }
                previous.next = point.next;
                point.next.prev = previous;
            }
            this.length--;
            return point.element;
        }else return null; 
    }
    this.indexOf = (ele) =>  {
        let index = -1; 
        point = head;
        // node = new Node(ele)
        while (point.next !=head) {
            index++;
            if (point.element === ele)return index; 
            point = point.next; 
        }
        return-1; 
    }
    this.print = () =>  {
        console.log(this.toString())
    }
    this.toString = () =>  {
        
        point = head; 
        let str = ''; 
        let index = 0; 
        while (index ++  < this.length) {
            str += `${point.element} -> ${point.next?'':'null'}`
            point = point.next; 
        }
        return str; 
    }
    this.append = (element) =>  {
        let node = new Node(element), 
            previous; 
        point = head; 
        if ( !head) {
            head = node; 
            tail = node; 
            tail.next = head; 
            head.prev = tail; 
        }else {
            while (point.next != head) {
                point = point.next

            }
            tail = point; 
            point.next = node; 
            node.prev = point; 
            head.prev = node; 
            node.next = head; 
        }
        this.length ++ ; 
        return true; 
    }
    this.console = () =>  {
        debugger; 
        point = head; 
        let index = 0; 
        while (index ++  < this.length) {
            console.log(point); 
            point = point.next; 
        }
    }
    this.insert = (position, ele) =>  {
        if (position >= 0 && position <= this.length) {
            point = head; 
            let node = new Node(ele), 
                index = 0; 
            if (position === 0) {
                if ( !head) {//head =null

                    head = node; 
                    tail = node; 
                    head.prev = tail; 
                    tail.next = head; 
                }else {
                    point.prev = node; 
                    node.next = point; 
                    head = node; 

                    node.prev = tail; 
                    tail.next = node; 
                }
            }else if (position === this.length) {
                point = tail
                // 处理后指针
                point.next = node; 
                node.prev = point; 
                tail = node; 
                node.next = head; 
               
            }else {
                // 拿到前一个和当前一个，point指向当前node
                while (index ++  < position) {
                    previous = point; 
                    point = point.next; 
                }
                //处理后指针
                point.prev = node; 
                node.next = point; 
                //处理前指针
                node.prev = previous
                previous.next = node; 

            }
            this.length ++ ; 
            return true
        }else return false; 
    }

}
let looplist = new LoopLinkList(); 
// looplist.insert(0, 1)
// looplist.insert(0, 2)
// looplist.insert(0, 3)

for (let i = 0; i < 20; i ++ ) {
    looplist.append(i)
}
looplist.print()
console.log(looplist)
looplist.insert(looplist.length, 'lolo'); looplist.print(); 
console.log(looplist.console()); 