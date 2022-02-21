//Prototypal pattern 
let bookMethod={
    isAnswerIndex(index){
        return index===bookDesign.correctAnswerIndex;
    },
     getCorrectAnswer(correctAnswerIndex){
        return bookDesign.option[correctAnswerIndex]
    },
    
}

function bookDesign(title,option,correctAnswerIndex){
    let book=Object.create(bookMethod);
    book.title=title;
    book.option=option;
    book.correctAnswerIndex=correctAnswerIndex;
    return book;
}  


//Pseudoclassical Pattern

function bookDesign(title,option,correctAnswerIndex){
    let book=Object.create(bookMethod);
    book.title=title;
    book.option=option;
    book.correctAnswerIndex=correctAnswerIndex;
    return book;


    bookDesign.prototype={
        isAnswerIndex:function(index){
            return index=== correctAnswerIndex
        },
        getCorrectAnswer:function(correctAnswerIndex){
            return  bookDesign.option[correctAnswerIndex]
        }
    }

} 



//using class

class bookDesign{

    constructor(title,option,correctAnswerIndex){
        this.title=title;
        this.option=option;
        this.correctAnswerIndex=correctAnswerIndex
    }
    isAnswerIndex(index){
        return index=== this.correctAnswerIndex
    }
    getCorrectAnswer(){
        return this.option[this.correctAnswerIndex]
    }

}