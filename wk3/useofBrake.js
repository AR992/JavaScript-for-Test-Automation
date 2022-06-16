/**
 * Use case 3: Use of brake statements
 * @scenario:
 * Switch to a specific window
 */

let windows = ["Google", "Amazon", "YouTube"]

for (let i = 0; i < windows.length; i++) {
    let window = windows[i]
    if (window === "Amazon") {
        // write code to switch to this window
        break
    }
    console.log(window)
}