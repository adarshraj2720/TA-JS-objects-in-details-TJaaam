## Create Class

Convert the give image into class using inheritance.

- `name` is the property
- `eat()` is the method

Property ending with `()` is method. And others are properties.

```js
class Person{
    constructor(name,age,gender){
        this.name=name;
        this.age=age;
        this.gender=gender;
    }
    eat(){

    }
    sleep(){

    }
    walk(){

    }
}
class Player extends Person{
     constructor(name,age,gender,sportName){
         super( name,age,gender)
         this.sportName=sportName;
     }
     play(){

     }

}

class Teacher extends Person{
     constructor(name,age,gender,instituteName){
         super( name,age,gender)
         this.instituteName=instituteName;
     }
     teach(){
         
     }

}

class Artist extends Person{
     constructor(name,age,gender,kind){
         super( name,age,gender)
         this.kind=kind;
     }
        createArt(){
         
     }

}

class Cricketer extends Player{
     constructor(name,age,gender,sportsName,teamName){
         super( name,age,gender,sportName)
         this.teamName=teamName;
     }
        playCricket(){
         
     }

}


```

![Inheritance](../assets/inheritance.png)
