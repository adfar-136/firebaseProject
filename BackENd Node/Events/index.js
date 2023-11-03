const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

//eventEmitter.addlistener(evennt,listener);
//eventEmitter.on(evennt,listener);
const function1 = (x)=>{
    console.log(x)
}
const function2 = (y)=>{
    console.log(y)
}
eventEmitter.on('adfar',function1);
eventEmitter.on('adfar',function2);
eventEmitter.on('adfar',function2);
eventEmitter.on('adfar',function1);
eventEmitter.prependListener('adfar',function2)
eventEmitter.on('adfar',function2)
console.log(eventEmitter.listeners('adfar'))

// eventEmitter.emit('adfar',"Adfar Rashid")