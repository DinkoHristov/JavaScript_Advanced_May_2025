function extensibleObject() { 
    return{
        extend(template) {
            for (const key in template) {
                if (typeof template[key] === 'function') {
                    Object.getPrototypeOf(this)[key] = template[key];
                } else {
                    this[key] = template[key];
                }
            }
        }
    };
} 

const myObj = extensibleObject();     
console.log(myObj);

const template = { 
    extensionMethod: function () {}, 
    extensionProperty: 'someString' 
} 
myObj.extend(template);
console.log(myObj);
console.log(myObj.extensionProperty); // 'someString'
myObj.extensionMethod();