function arrayReverse(arr: number[]):number[] {
    let start = 0, end = arr.length - 1

    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
        start++ //every true it will add the start to end and end to last 
        end-- //it will make the arr length to zero and satisfied the condition
    }

    return arr
}

console.log(arrayReverse([1,2,3,4,5]))

const arrays = [1,2,3,4,5,6,7]

arrays.forEach((array)=> console.log(array))