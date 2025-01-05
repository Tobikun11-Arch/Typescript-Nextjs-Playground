
// Challenge 1: Group Anagrams (Medium)
// Problem:
// Given an array of strings, group anagrams together. An anagram is a word or phrase formed by rearranging the letters of a different word (e.g., "eat" and "tea").

// Example:

// typescript
// Copy code
// Input: ["eat", "tea", "tan", "ate", "nat", "bat"]  
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
// Hint:
// Use a hashmap to group words by their sorted characters as the key.

function AnagramGroup(strs: string[]): string[][] {
    const map = new Map<string, string[]>() // string, [" ", " "]

    for (const str of strs) {
        const sorted = str.split('').sort().join('')

        if(!map.has(sorted)) {  //if wala pa sa map na aet then ung sorted malalagay don  
            map.set(sorted, []) //if wala pa sa map ung sorted magiging "aet": []
        }

        map.get(sorted)!.push(str) // map.get("aet")!.push("eat") so -it becomes like this - "aet": ["eat"]
    }

    return Array.from(map.values())
}

const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(AnagramGroup(input))