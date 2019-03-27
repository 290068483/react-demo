function LinkedList() {
    //表示要加入队列的项
    let Node = function (element) {
        this.element = element;
        this.next = null;
    }
    let length = 0; //链表的长度
    let head = null; // 第一个节点的引用
    // 列表为空，或者不为空
    this.append = (element) => {
        let node = new Node(element),
            current;
        if (head === null) {
            head = node;
        } else {
            // 获取第一个元素
            current = head;
            //current.next 存放下一个元素的引用
            while (current.next) {
                current = current.next;
            }
            //找到最后一项，将其next赋为node，建立链接
            current.next = node; //{5} 
        }
        length++; //更新列表的长度
    }
    // 在任意位置插入元素
    this.insert = (position, element) => {
        if (position >= 0 && position <= length) {
            let node = new Node(element),
                current = head,
                previous, index = 0;
            if (position === 0) {
                // 插入在最前面
                node.next = current;
                head = node;
            } else {
                // 拿到position的位置的元素
                while (index++ < position) {
                    privious = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            length++;
            return true;
        } else return false;

    }
    this.removeAt = function (position) {
        //检查越界值
        if (position > -1 && position < length) {
            let current = head,
                previous, index = 0
            //移除第一项
            if (position === 0) {
                head = current.next;
            } else {
                while (index++ < postions) {
                    previous = current;
                    current = current.next
                }
                //将previous与current的下一项链接起来：跳过current，从而移除它
                previous.next = current.next; // {9} 
            }
            length--; // {10} 
            return current.element;
        } else {
            return null;
        }
    };
    this.remove = (element) => {
        return this.removeAt(this.indexOf(element))
    };
    this.indexOf = function (element) {
        let current = head,
            index = -1;
        while (current) {
            index++;
            if (current.element === element) return index;
            current = current.next;
        }
        return -1;
    };
    this.isEmpty = function () {
        return length === 0
    };
    this.size = function () {
        console.log(length)
    };
    this.getHead = function () {return head};
    this.toString = function () {
        let current = head,
            str = '';
        while (current) {
            str += `${current.element}->${current.next?'n':null}`;
            current = current.next;
        }
        return str;
    };
    this.print = function () {
        console.log(this.toString())
    }.bind(this);
}

let list = new LinkedList();
list.append(1);
list.append(2)
list.append(3)
list.append(4)
list.append(5)
list.print()
console.log(`indexof1》》${list.indexOf(1)}`);
console.log(`indexof2》》${list.indexOf(2)}`);
console.log(`indexof0》》${list.indexOf(0)}`);
console.log(`indexof5》》${list.indexOf(5)}`);

console.log(`isEmpty--${list.isEmpty()}`)
console.log(`size--${list.size()}`);
console.log(list.getHead())