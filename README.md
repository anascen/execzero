# execzero

execzero is an npm package designed to work seamlessly with ascen's zero package. This tool enables effortless system shutdowns on macOS, Windows, and Linux, providing a convenient and unified solution for controlling your PC's power state.

## Installation:

-   **Using npm:**

```
npm i -g @ascen/execzero
```

-   **Using yarn:**

```
yarn global add @ascen/execzero
```

-   **Using pnpm:**

```
pnpm global add @ascen/execzero
```

## Usage:

-   **Inside File:**

```
import execzero from "@ascen/execzero"

// Call an execzero function
execzero((err, stderr, stdout) => {
    if(!err && !stderr) {
        console.log(stdout);
    }
});
```

-   **Inside CLI:**

```
execzero
```
