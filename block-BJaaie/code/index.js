//pseudoclassical Pattern

//ANIMAL


animal.prototype={
    eat: function(){
        return `I libe in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        return animalsName.location=newLocation
    },
    summary:function(){
        return `I live in ${this.location} and I have ${this.numberOflegs}`
    }

}


function animal(location,numberOflegs){
    
        this.location=location;
        this.numberOflegs=numberOflegs;
    
}
Object.setPrototypeOf(animal.prototype,dog.prototype )

//DOG


 dog.prototype={
    bark:function(){
        return `I am ${this.name} and I can bark 🐈`
    },
    changeName:function(newName){
        return this.name=newName
    },
    changeColor:function(newColor){
        return this.color=newColor
    },
    summary:function(){
        return `I am  ${this.name} and I am of ${this.color} . I can also bark`;
    }
}



function dog(location,numberOflegs,name,color){
  
        animal.apply(this,[location,numberOflegs])
        this.name=name;
        this.color=color;
   
}

//CAT
Object.setPrototypeOf(animal.prototype,  cat.prototype)

 cat.prototype={
    meow:function(){
        return `I am ${this.name} and I can do mewo mewo 😹`
    },
    changeName:function(newName){
        return this.name=newName
    },
    changeColorofEyes:function(newColor){
        return this.colorofEyes=newColor
    },
    summary:function(){
        return `I am  ${this.name} and the color of my eyes are ${this.colorofEyes} . I can do meow meow`;
    }
}



function cat(location,numberOflegs,name,colorofEyes){
    animal.apply(this,[location,numberOflegs])
        this.name=name;
        this.colorofEyes=colorofEyes;
    
}



//class

//animal

class animal{
constructor(location,numberOflegs){
    this.location=location;
    this.numberOflegs=numberOflegs
}
eat(){
    return `I libe in ${this.location} and I can eat`
}
changeLocation(newLocation){
    return animalsName.location=newLocation
}
summary(){
    return `I live in ${this.location} and I have ${this.numberOflegs}`
}
}

//dog

class dog extends animal{
    constructor(location,numberOflegs, name,color){
        super(location,numberOflegs)
        this.name=name;
        this.color=color
    }
    bark(){
        return `I am ${this.name} and I can bark 🐈`
    }
    changeName(newName){
        return this.name=newName
    }
    changeColor(newColor){
        return this.color=newColor
    }
    summary(){
        return `I am  ${this.name} and I am of ${this.color} . I can also bark`;
    }   
}


//cat

