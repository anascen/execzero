// test/test.js
import { strict as assert } from "assert";
import execzero from "../build/index.js";

// Test for Linux or OSX
execzero((err, stdout, stderr) => {
    assert.ifError(err);
    assert.equal(stderr, null);
    assert.notEqual(stdout, null);
    console.log("Test passed for Linux or OSX");
});

// Test for Windows
execzero((err, stdout, stderr) => {
    assert.ifError(err);
    assert.equal(stderr, null);
    assert.notEqual(stdout, null);
    console.log("Test passed for Windows");
});
