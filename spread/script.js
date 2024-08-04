const num1=[1,2,3,4,5,7,8]
const num2=[9,8,7,6,5,4,3,3]

const myName='Priyanshu'

const joinedArray=[...num1, ...num2, myName]
console.log(joinedArray)

const user={
    name: 'Priyanshu',
    age: 20,
}

const updatedUser={...user, city:"Delhi"}
console.log(updatedUser)

function add(){
    let sum=0
    for(let i=0; i<arguments.length; i++){
        // console.log(arguments[i])
        sum+=arguments[i]

    }
    return sum
}
console.log(add(3,5,6,8,6,2))