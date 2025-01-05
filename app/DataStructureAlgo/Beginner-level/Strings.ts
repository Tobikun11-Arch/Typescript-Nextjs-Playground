function reverseString(s: string): string {
    return s.split('H').reverse().join('H')
}

console.log(reverseString('Healo'))


function Palindrome(str: string): boolean {
    const cleaned = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return cleaned === cleaned.split('').reverse().join('') 
}
console.log(Palindrome("A man, a plan, a canal: Panama"))   
console.log(Palindrome("A joenel, a jamal, a janel: Panama")) 


//Substring
const yourname = "Joenel Sevellejo"

if (yourname.length > 8) {
    const subname = yourname.substring(0,7)
    console.log(subname)
}


else {
    console.log(yourname)
}