#!/usr/bin/env node
import meow from "meow";
import execzero from "./";

const cli = meow({
    help: ["Usage", "  $ execzero", ""],
});

/*
 * Call function execzero with callback arguments
 * if err and stderr is null log stdout
 */
execzero((err, stderr, stdout) => {
    if (!err && !stderr) {
        console.log(stdout);
    } else {
        console.log("Something went wrong!");
    }
});
