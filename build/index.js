import isLinux from "is-linux";
import isOSX from "is-osx";
import isWindows from "is-windows";
import { exec } from "child_process";

export default function (cb) {
    /*
     * commands that executes
     * sudo shutdown -h now
     * shutdown -s -t 0
     */
    var commands = "";

    /*
     * check for os type
     * assign shutdown commands accordingly
     * if not match throw error
     */
    if (isLinux() || isOSX()) {
        commands = "sudo shutdown -h now";
    } else if (isWindows()) {
        commands = "shutdown -s -t 0";
    } else {
        throw new Error('OS must be "osx" or "linux" or "windows"!');
    }

    /*
     * execute commands using child process
     * if os is linux then execute "sudo shutdown -h now"
     * if os is osx then execute "sudo shutdown -h now"
     * if os is windows then execute "shutdown -s -t 0"
     */
    exec(commands, (err, stdout, stderr) => {
        if (typeof cb === "function") {
            cb(err, stdout, stderr);
        } else {
            throw new Error("Parameter cb must be a typeof function");
        }
    });
}
