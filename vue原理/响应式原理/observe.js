
let data = {
    name: 'yang',
    age: 19,
    obj: {
        height: 10
    },
    arr: [1,2,3]
}

/**
 * 数组变异方法
 */
const arrayProto = Array.prototype;
const arrayMethods = Object.create(arrayProto);
['push', 'splice', 'reverse', 'unshift', 'shift', 'pop', 'sort'].forEach(key => {
    arrayMethods[key] = function() {
        arrayProto[key].call(this, ...arguments);
        render();
    }
});


observe(data);
function observe(data) {
    for(let prop in data) {
        defineReactive(data, prop, data[prop]);
    }
}
// const prototypePush = Array.prototype.push;
// Array.prototype.push = function() {
//     prototypePush.call(this, ...arguments);
//     render();
// }
// push splice reverse unshift shift pop sort


function defineReactive(data, key, value) {
    if(Array.isArray(value)) {
        value.__proto__ = arrayMethods;
        return;
    }
    if(typeof value === 'object') {
        observe(value);
    }
    Object.defineProperty(data, key, {
        // configurable: true,
        // writable: true,
        // enumerable: true,
        // value: 123,
        get() {
            // console.log('读'); 
            return value;
        },
        set(newVal) {
            if(newVal === value) {
                return;
            }
            console.log('写');
            value = newVal;
            render();
            return value;
        }
    })
}

function $set(data, key, value) {
    if(Array.isArray(data)) {
        data.splice(key, 1, value);
        return;
    }
    defineReactive(data, key, value);
    render();
}

function $delete(data, key) {
    if(Array.isArray(data)) {
        data.splice(key, 1);
        return;
    }
    delete data[key];
    render();
}

function render() {
    console.log('页面渲染了');
}

data.name = '234'
console.log(data);


let value = data.name;
Object.defineProperty(data, 'name', {
    get() {
        return value
    },
    set(newVal) {
        value = newVal;
    }
})