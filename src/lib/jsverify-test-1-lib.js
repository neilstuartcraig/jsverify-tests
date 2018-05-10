"use strict";

function adder(a, b)
{
    // if(b > 63)
    // {
    //     b = b + 1;
    // }

    const res = a + b;
    return res;
}


module.exports =
{
    adder: adder
};
