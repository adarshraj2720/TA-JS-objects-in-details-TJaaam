let root = document.querySelector(".quizz");
class Question{
    constructor(title,options,correctAnswer){
        this.title=title;
        this.options=options;
        this.correctAnswer=correctAnswer
    
    }
    isCorrect(correctAnswer){
         this.options.includes(correctAnswer)
    }
    getCorrectAnswer(){
        this.correctAnswer;


    }
    createUI(){
        let li =document.createElement('li')
         let question= document.createElement('p');
         question.innerText=this.title;
         let optionA= document.createElement('span')
         optionA.innerText=this.options[0]
         let optionB=document.createElement('span')
         optionB.innerText=this.options[1]
         let optionc=document.createElement('span')
         optionc.innerText=this.options[2]
         let optionD=document.createElement('span')
         optionD.innerText=this.options[3]
         li.append(question,optionA,optionB,optionc,optionD);
        root.append(li);
    }



}


let questions=new Question("hjbhjd",["d","f","r","h"],"r");
class Quiz{
    constructor(allquestion=[],activeIndex){
        this.allquestion=allquestion;
        this.activeIndex=activeIndex;
        this.score=0
    }
    nextQuestion(){
        for(let i=0;i<this.allquestion.length;i++){
         return this.allquestion[i]   ;
        }
    }

    


}



questions.createUI(); 