let Stack = function () {
         let items = []; 
         this.isEmpty = () =>  {
             return items.length === 0; 
         }; 
         this.push = (...arg) =>  {
             items.push(arg); 
         }; 
         this.pop = () => items.pop(); 
         this.print = function () {
             console.log(items.toString()); 
         }; 
         this.clear = function () {
             items = []; 
         }; 
         this.size = function () {
             return items.length; 
         }; 
         // 返回栈顶的元素
         this.peek = function () {
             return items[items.length - 1]; 
         }; 
     }; 

     let stack = new Stack(); 
     stack.push(1); 
     stack.push("nihao"); 
     stack.print(); 
     stack.pop(); 
     stack.print(); 
console.log(stack.isEmpty())
console.log(stack.isEmpty())
console.log(stack.isEmpty())
console.log(stack.isEmpty())
console.log(stack.isEmpty())
console.log(stack.isEmpty())