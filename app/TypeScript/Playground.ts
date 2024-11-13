console.log("Test")
const myname = "Joenel"
console.log(myname)

function identity<T>(value: T): T {
    return value
}

const myfirstName = identity<number>(10)
console.log(myfirstName)

interface userCost {
    name: string
    cost: number
}

const user: userCost = { name: 'Joenel', cost: 5000 }

function getOverallCost(cost: number) {
    if(cost > 5100){
        console.log("Greater than 45000")
    }
    return cost 
}
getOverallCost(user.cost)

const users = [ 'Joenel', 'John', 'Doe' ]

for (const user of users) {
    console.log(user)
}

users.forEach((each)=> console.log(each))

//? how to run my playground :: ts-node app\TypeScript\Playground.ts
//? how to use Quokka, ctrl shift p and new file for ts