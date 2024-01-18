const obj = {
    name: 'yangheng'
}

let value = obj.name;
Object.defineProperty(obj, 'name', {
    get() {
        return value;
    },
    set(newVal) {
        if(newVal !== value){
            value = newVal
        }
        return value;
    }
})
console.log(obj.name);
console.log(obj.name = 123);