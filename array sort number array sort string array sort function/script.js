// serial wise number sorting 
const myArray = [9,8,7,6,5,4,3,2,1,2,3,4,5,6,7,]
const update = myArray.sort()
console.log(update)
// serial wise array sorting 
const myFriends = ['emrul','nafis','jahid','rubel','hasib','tulip','alamin','nahid','sayem',]
const friendsorting = myFriends.sort()
console.log(friendsorting)

// revars number 
const myArrayrevuers = myArray.reverse()
console.log(myArrayrevuers)

const myfriendsrevars = myFriends.reverse()
console.log(myfriendsrevars)

// sort and reverse one line implement 
const myArraysortRevers = myArray.sort().reverse()
console.log(myArraysortRevers)

const myArray = [34,334,22,45,322,45,56,7,8]
const myArraysort = myArray.sort(function(a,b){ //callback function sorting number
    return a - b
})
console.log(myArraysort)

