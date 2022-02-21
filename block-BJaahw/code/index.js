// 1. Create a function `createUser` that accepts `name` and `age` and returns a new object with those properties.
function createUser(name,age){
let userInfo={};
userInfo.name=name;
userInfo.age=age;
userInfo.sayHello= function (name){
    return alert `Welcome ${name}`
}

return  userInfo


}

// 2. Add a method named `sayHello` inside the object created above. When called it should alert `Welcome {user}`. Replace `{user}` with the name of the user.


// 3. Use the data (name, age) of two different person to create the object using `createUser`. Store the returned value in `personOne` and `personTwo`.
let personOne=userInfo("Adarsh",22)


let personTwo=userInfo("sahil",24)


// 4. Change the code inside `createUser` in such a way that the methods `sayHello` doesn't have to be in all object. Use the prototypal nature. (Hint Object.create())


let userMethod={
     sayHello(){
         return `Welcome ${this.name}`
     }
}
function createUser(name,age){
    let userInfo=Object.create(userMethod);
    userInfo.name=name;
    userInfo.age=age; 
    return  userInfo
    
    }



// 5. Convert the `createUser` function into Pseudoclassical pattern of object creation. Use `F.prototype` to store the methods. `F.prototype` means storing the methods in prototype property of the function.


function createUser(name,age){
   let userInfo=Object.create(createUser.prototype);
   userInfo.name=name;
   userInfo.age=age; 
   return  userInfo
   
   }
   createUser.prototype={
    sayHello(){
            alert `Welcome ${this.name}`
    }
}


// 6. Use `new` to create two new objects with the data of two different person and re-assign the value of `personOne` and `personTwo`.
let personOne=new userInfo("Adarsh",22)


let personTwo= new userInfo("sahil",24)


// 7. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.

// 8. Convert the `createUser` function into `User` class.
class user{

    constructor(name,age){
        this.name=name;
        this.age=age
    }
    sayHello(){
        alert `Welcome ${this.name}`
    }
}
// 9. Check by creating two instance of the class using data of two different persons and re-assign the value of `personOne` and `personTwo`
let personOne=new userInfo("Adarsh",22)


let personTwo= new userInfo("sahil",24)
// 10. Try calling `personOne.sayHello()` and `personTwo.sayHello()`. Check if you get the required output.
