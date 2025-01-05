function countnum(nums: number[]): Map<number, number> {
    const map = new Map<number, number>()
    for (const num of nums) {
        map.set(num, (map.get(num) || 0) + 1)
    }

    return map
}

console.log(countnum([10,4,4,11, 4])) // 10: 1, 4: 3, 11: 1 
//it return 1 if the num is not in map if it was check and theres already same num it become 4 : 3


function duplicate(nums: number[]): number[] {
    const set = new Set<number>()
    const duplicates: number[] = []

    for (const num of nums) {
        if(set.has(num)) { //the first condition check if meron na sa set na value of first number
            duplicates.push(num) //if meron ilalagay ung number na un sa []
        }
        else {
            set.add(num) //if pagka check naman na wala pa dto mapupunta sa add sa set for storing
        }
    }
    return duplicates
}

console.log(duplicate([2,5,10,5,3,2])) //[ 5, 2 ]