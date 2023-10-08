const fibonacci = function(a) {
    if (a < 0) {
        return "OOPS";
    }

    let fib = 0;
    let nextfib = 1;
    for (i = 0; i < a; i++) {
        nextfib += fib;
        fib = nextfib - fib;
    }
    
    return fib;
};

// Do not edit below this line
module.exports = fibonacci;
