"use strict";

// TODO: have a specific var for the lib filename and use that for consistency

const config = require("../config/jsverify-test-1-config.js"); // NOTE: Path is relative to build dir (dist/)
const lib = require("./lib/jsverify-test-1-lib.js"); // NOTE: Path is relative to build dir (dist/) - local because lib is babel'd

// TODO: config, likely deps, etc...

//...simple tests
let arg = config.testArg;
let ret = lib.test1(arg);
console.log("Hello! test('" + arg + "') returns " + ret);