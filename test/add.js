"use strict";

import test from "ava";
import jsverify from "jsverify";
import {adder} from "../src/lib/jsverify-test-1-lib.js";

test("adder(a + b) === a + b", (t) => 
{
    const options = 
    {
        tests: 99999,
        size: 99999,
        quiet: false
    };

    // NOTE: r will be true if no errors are found, an object otherwise
    // NOTE: For jsverify dtaa types, see https://github.com/jsverify/jsverify#primitive-arbitraries
    const r = jsverify.check(jsverify.forall(jsverify.integer, jsverify.integer, (a, b) => 
    {
        // Execute our function and capture the output
        const res = adder(a, b);

        // Calculate what the result of our function should have been or some way of testing it e.g. a data type of the returned value
        const expected = a + b;

        // Create a boolean var we can return where true indicates no bug, false otherwise
        const ret = res === expected;

        return ret;
    }), options); // NOTE: options is set above, see https://github.com/jsverify/jsverify#properties for details of options available

    // Unsure how much value this adds
    let err = "";
    if(typeof r === "object")
    {
        err = `ERROR: ${r.tests} tests, ${r.shrinks} shrinks. Counter example: ${r.counterexamplestr}`;
    }

    t.is(err === "", true, err);
});


// need to finesse this example to see if we can prevent the stack trace on error whilst failing the test and providing useful feedback on error
// works but output is rough

// test("Error handling, invalid inputs (files dont exist)", (t) => 
// {
//     t.notThrows(() => 
//     {
//         const options = 
//         {
//             tests: 307,
//             size: 99,
//             quiet: true
//         };

// // let i = 0;        
//         // const res = jsverify.assertForall(jsverify.integer, jsverify.integer,  (a, b) => 
//         const r = jsverify.check(jsverify.forall(jsverify.integer, jsverify.integer,  (a, b) => 
//         {
//             const res = adder(a, b);
//             const expected = a + b;
//             const ret = res === expected;
// // i++;            
//             return ret;
//         }), options);

// // console.log(`i: ${i}, r: ${r}`);
// // console.dir(r);

//         t.is(r, true, "r must be true (not an object");

//         if(r !== true)
//         {
//             throw new Error("blah");
//         }

//     }, "test that adder(a, b) === a + b");
// });

