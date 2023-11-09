#!/usr/bin/env node
import meow from "meow";
import execzero from "./index.js";

const cli = meow({
    help: ["Usage", "  $ execzero", ""].join("\n"),
    importMeta: import.meta,
});

/*
 * Call function execzero with callback arguments
 * if err and stderr is null log stdout
 */
execzero((err, stdout, stderr) => {
    if (!err && !stderr) {
        console.log(stdout);
    } else {
        console.log("Something went wrong!");
    }
});
