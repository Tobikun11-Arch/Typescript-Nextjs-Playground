export interface Products {
    id: number,
    prodName: string,
    prodPrice:number,
    prodRate: number,
    Customer: {
        cus1: string,
        cus2: string,
        cus3: string
    }
}

export interface HumanProps {
    address: {
        street: string
        suite: string
        City: string
    }
    company: {
        name: string
        catchPhrase: string
        bs: string
    }
    email: string
    id: number
    name: string
    phone: string
    username: string
    website: string
}

console.log("Joenel")

const ArrayList = ["Joenel", "Bsit", "Section 2-1"]
console.log(ArrayList.reverse())