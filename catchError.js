console.log('hello world');

// const originListener = EventTarget.prototype.addEventListener;
// EventTarget.prototype.addEventListener = function(type, listener, options) {
//     const wrappedListener = function(...args) {
//         try {
//             return listener.apply(this, args);
//         } catch (err) {
//             throw err;
//         }
//     }
//     return originListener.call(this, type, wrappedListener, options);
// }


const sourceTagName = ['script', 'img', 'link'].map(i=>i.toUpperCase());

/**
 * 
 * @param {Object} e ErrorEvent对象
 */ 
const catchError = (e) => {
    console.log(e.target.nodeName, sourceTagName.includes(e.target.nodeName));
    console.log('catch error: ', e);
};

const catchPromiseError = (e) => {
    console.log('catch promise error: ', e);
}

window.addEventListener('error', catchError, true);
window.addEventListener('unhandledrejection', catchPromiseError);


// test 1: sync error 
// console.log(isVariable);

// test 2: async error
setTimeout(() => {
    console.log(isAsync);
}, 2000);

// import('./im.js');

// new Promise((res, rej) => {
//     res('hello');
// }).then((res) => {
//     throw res;
// })


  

