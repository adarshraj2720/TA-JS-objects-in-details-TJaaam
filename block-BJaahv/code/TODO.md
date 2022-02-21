# 🎖 Object Creation Patterns

Create a object using the following patterns given below.

## Create in all 4 formats

- [ ] Using function to create object
```js
function userInfo(name,id,noOfProjects){
    let userDetails ={}
    userDetails.name=name;
    userDetails.id=id;
    userDetails.noOfProjects=noOfProjects

    return userDetails;
         function getProjects() {
    return userDetails.noOfProjects;
  }
  function changeName(newName){
    return userDetails.name=newName;
  }
  function incrementProject(n) {
    return userDetails.noOfProjects+n
  }
  function decrementProject(n){
    return userDetails.noOfProjects-n;
  }
}


}



```



- [ ] Using Object.create (prototypal pattern)
```js


let userMethod= {

        getProjects :function(){
    return this.noOfProjects;
  },
  changeName :function(newName){
    return this.name=newName;
  },
  incrementProject :function(n){
    return this.noOfProjects+n
  },
  decrementProject :function(n){
    return this.noOfProjects-n;
  },
}


function userInfo(name,id,noOfProjects){
    let userDetails =Object.create(userMethod)
    userDetails.name=name;
    userDetails.id=id;
    userDetails.noOfProjects=noOfProjects

    return userDetails;
}


    



```




- [ ] Using Pseudoclassical Way
```js
function userInfo(name,id,noOfProjects){
    let userDetails =Object.create(userInfo.prototype)
    userDetails.name=name;
    userDetails.id=id;
    userDetails.noOfProjects=noOfProjects

    return userDetails;
}
    userInfo.prototype={

        getProjects(){
    return this.noOfProjects;
  },
  changeName(newName){
    return this.name=newName;
  },
  incrementProject(n){
    return this.noOfProjects+n
  },
  decrementProject(n){
    return this.noOfProjects-n;
  },
}

    







```







- [ ] Using Class

```js
class userInfo{
  constructor(name,id,noOfProjects){
    this.name=name;
    this.id=id;
    this.noOfProjects=noOfProjects;
  }
  getProjects(){
    return this.noOfProjects;
  }
  changeName(newName){
    return this.name=newName;
  }
  incrementProject(n){
    return this.noOfProjects+n
  }
  decrementProject(n){
    return this.noOfProjects-n;
  }
}



```





## Requirements

Create User (class/function) with the following properties.

- [ ] properties (data):
  - [ ] name
  - [ ] id
  - [ ] noOfProjects
- [ ] methods:
  - [ ] getProjects -> return number of project
  - [ ] changeName -> accepts one parameter (newName)returns old user name
  - [ ] incrementProject -> returns updated number of projects
  - [ ] decrementProject -> returns updated number of projects

Write 2 tests for all the different ways of creating object. Test all the methods on these objects.
