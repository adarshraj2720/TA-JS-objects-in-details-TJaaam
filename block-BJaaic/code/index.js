//ANIMAL


let animalMethod={
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
    let animalsName=Object.create(animalMethod);
        animalsName.location=location;
        animalsName.numberOflegs=numberOflegs;
    return animalsName
}

Object.setPrototypeOf(animalMethod,dogMethod )

//DOG


let dogMethod={
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
    let animalsName=Object.create(dogMethod);
        animalsName.location=location;
        animalsName.numberOflegs=numberOflegs;
        animalsName.name=name;
        animalsName.color=color;
    return animalsName
}

//CAT
Object.setPrototypeOf(animalMethod,catMethod )

let catMethod={
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
    let animalsName=Object.create(catMethod);
        animalsName.location=location;
        animalsName.numberOflegs=numberOflegs;
        animalsName.name=name;
        animalsName.colorofEyes=colorofEyes;
    return animalsName
}