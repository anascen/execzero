import { ChildProcessCallback } from "child_process";

interface ExecZeroOptions {
    cb?: ChildProcessCallback;
}

declare function execzero(options?: ExecZeroOptions): void;

export default execzero;

// declare module "execzero" {
//     export interface CallbackFunction {
//         (error: Error | null, stdout: string, stderr: string): void;
//     }

//     function execzero(cb: CallbackFunction): void;

//     export default execzero;
// }
