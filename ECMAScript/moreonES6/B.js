//iterator and generator
/*Symbol.iterator is the default iterator for an object. The for...of loops are based on this type of iterator.
In the example below, we will see how we should implement it and how generator functions are used.*/

let mio = {
    [Symbol.iterator] : function* (){
        yield 1; yield 2; yield 3;
    }
};

console.log([...mio]);

/**First, we create an object, and use the Symbol.iterator and generator function to fill it with some values.

In the second line of the code, we use a * with the function keyword. It's called a generator function (or gen function). */