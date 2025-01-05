// Challenge 2: Find First Unique Character in a String (Easy)
// Problem:
// Given a string, find the first non-repeating character and return its index. If all characters repeat, return -1.

// Example:

// typescript
// Copy code
// Input: "loveleetcode"  
// Output: 2  // 'v' is the first unique character.
// Hint:
// Use a hashmap to count the occurrences of each character, then iterate through the string.

function UniqueString(str: string): number {
    const chCounbt = new Map<string, number>()

    for (const st of str) {
        chCounbt.set(st, (chCounbt.get(st) || 0) + 1)
    } 

    for (let i = 0; i < str.length; i++) {
        if (chCounbt.get(str[i]) === 1) {
            return i
        }
    }

    return -1
}

console.log(UniqueString("loveleetcode"))