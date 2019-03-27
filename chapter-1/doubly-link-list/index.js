function DoublyLinkedList() {
    //表示要加入队列的项
    let Node = function (element) {
        this.element = element;
        this.next = null;
        this.prve = null;
        this.point = null;
    }
    this.length = 0; //链表的长度
    let head = null; // 第一个节点的引用
    let tail = null

    // 列表为空，或者不为空
    this.append = (element) => {
        let node = new Node(element),
            point;
        if (head === null) {
            head = node;
            tail = node;
        } else {
            // 获取第一个元素
            point = head;
            //point.next 存放下一个元素的引用
            while (point.next) {
                point = point.next;
            }
            //找到最后一项，将其next赋为node，建立链接
            point.next = node; //{5} 
            node.prev = point
        }
        this.length++; //更新列表的长度
    }
    // 在任意位置插入元素
    this.insert = (position = 0, element) => {
        debugger
        if (!element) alert('请输入要插入的元素')
        if (position >= 0 && position <= this.length) {
            let node = new Node(element),
                point = head,
                previous,
                index = 0;
            if (position === 0) {
                if (!head) {
                    head = node;
                    tail = node;
                } else {
                    node.next = point;
                    point.prve = node;
                    head = node;
                }

            } else if (position === this.length) { // 最后一项
                point = tail;
                tail = node;
                point.next = node;
                node.prev = point;
            } else {
                //挪动指针
                while (index++ < position) {
                    previous = point; //倒数第二个节点
                    point = point.next; //最后一个节点
                }
                node.next = point;
                point.prev = node;
                previous.next = node;
                node.prev = previous;
            }
            ++this.length;
            return true;
        } else return false;


    }
    this.removeAt = function (position) {
        //检查越界值
        if (position > -1 && position < this.length) {
            let point = head,
                previous, index = 0
            //移除第一项
            if (position === 0) {
                // 删除第一个，把hand指向第二个
                head = point.next;
                if (this.length === 1)
                    tail = null //
                //head 本身就是Null,因为length===1 point.next ==null
                else head.prev = null;
            } else if (position === this.length - 1) {
                //最后一个
                point = tail;
                tail = point.prev;
                tail.next = null;

            } else {
                // 把指针挪到当前postions
                while (index++ < position) {
                    previous = point;
                    point = point.next
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = point.next; // {9} 
                point.next.prev = previous
            }
            this.length--; // {10} 
            return point.element;
        } else {
            return null;
        }
    };
    //  
    this.remove = (element) => {
        return this.removeAt(this.indexOf(element))
    };
    this.indexOf = function (element) {
        let point = head,
            index = -1;
        while (point) {
            index++;
            if (point.element === element) return index;
            point = point.next;
        }
        return -1;
    };
    this.isEmpty = function () {
        return this.length === 0
    };
    this.size = function () {
        console.log(this.length)
    };
    this.getHead = function () {
        return head
    };
    this.toString = function () {
        let point = head,
            str = '';
        while (point) {
            str += `${point.element}->${point.next?'!':null}`;
            point = point.next;
        }
        return str;
    };
    this.print = function () {
        console.log(this.toString())
    }.bind(this);
}

let doublyList = new DoublyLinkedList();
doublyList.append(1);
doublyList.insert(1, 'aa');
doublyList.insert(0, 'ac');
doublyList.insert(3, 'bc');
doublyList.insert(1, 'kk');
doublyList.removeAt(0)
// doublyList.append(2)
// doublyList.append(3)
// doublyList.append(4)
// doublyList.append(5)
doublyList.print()
doublyList.removeAt(0)
doublyList.print()
console.log(doublyList)

console.log(doublyList.length)
// console.log(`indexof1》》${doublyList.indexOf(1)}`);
// console.log(`indexof2》》${doublyList.indexOf(2)}`);
// console.log(`indexof0》》${doublyList.indexOf(0)}`);
// console.log(`indexof5》》${doublyList.indexOf(5)}`);

// console.log(`isEmpty--${doublyList.isEmpty()}`)
// console.log(`size--${doublyList.size()}`);
// console.log(doublyList.getHead())