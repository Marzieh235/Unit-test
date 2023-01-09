const sum = (x, y) => {
    return (x + y);
}

const mul = (x, y) => {
    return (x * y);
}


const FirstItem = array => {
    if (array && array.length) {
        return array[0];
    }
}

const delayfilterwithCallback = function (array, filter, callback) {
    setTimeout(() => {
        callback(array.filter(filter))

    }, 1000)
}


const delayfilterwithPromise = function(array , filter, callback){
return new Promise ((resolve , reject)=>{
    setTimeout(() => {
        resolve(array.filter(filter))

    }, 1000)
})
}


module.exports = {
    sum,
    mul,
    FirstItem,
    delayfilterwithCallback,
    delayfilterwithPromise
}

