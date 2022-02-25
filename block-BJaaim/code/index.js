let form=document.querySelector('form');
let next=document.querySelector('.next')
let prev=document.querySelector('.prev')
let quizElm=document.querySelector('.quiz')
let p=document.querySelector('header p')

console.log(quizCollection);
// let root = document.querySelector(".quizz");
class Question{
    constructor(title,options,correctAnswerIndex){
        this.title=title;
        this.options=options;
        this.correctAnswerIndex=correctAnswerIndex
    
    }
    isCorrect(answer){
       return  this.options[this.correctAnswerIndex] === answer;
    }
    getCorrectAnswer(){
        this.options[this.correctAnswerIndex]
    }

    }
    // createUI(){
    //     let li =document.createElement('li')
    //      let question= document.createElement('p');
    //      question.innerText=this.title;
    //      let optionA= document.createElement('span')
    //      optionA.innerText=this.options[0]
    //      let optionB=document.createElement('span')
    //      optionB.innerText=this.options[1]
    //      let optionc=document.createElement('span')
    //      optionc.innerText=this.options[2]
    //      let optionD=document.createElement('span')
    //      optionD.innerText=this.options[3]
    //      li.append(question,optionA,optionB,optionc,optionD);
    //     root.append(li);
    // }






// let questions=new Question("hjbhjd",["d","f","r","h"],"r");


class Quiz{
    constructor(questions=[]){
        this.questions=questions;
        this.activeIndex=0;
        this.score=0
    }

    addQuestion(title,options,answerIndex){
        let question=new Question(title,options,answerIndex);
        this.questions.push(question);
        this.createUI()
        
    }
    nextQuestion(){
        this.activeIndex=this.activeIndex+1;
        this.createUI()
    }
    prevQuestion(){
        this.activeIndex=this.activeIndex-1;
        this.createUI()
    }
    // nextQuestion(){
    //     for(let i=0;i<this.allquestion.length;i++){
    //      return this.allquestion[i]   ;
    //     }}

    createUI(){
        quizElm.innerHTML=""
        let activeQuestion=this.questions[this.activeIndex];
        //         let li =document.createElement('li')
        //  let question= document.createElement('p');
        //  question.innerText=this.title;
        //  let optionA= document.createElement('span')
        //  optionA.innerText=this.options[0]
        //  let optionB=document.createElement('span')
        //  optionB.innerText=this.options[1]
        //  let optionc=document.createElement('span')
        //  optionc.innerText=this.options[2]
        //  let optionD=document.createElement('span')
        //  optionD.innerText=this.options[3]
        //  li.append(question,optionA,optionB,optionc,optionD);
        // root.append(li);
        let form=document.createElement('form');
        let fieldset=document.createElement('fieldset');
        let legend=document.createElement('legend');
        legend.innerText=activeQuestion.title;
        let optionsElm=document.createElement('div');
        optionsElm.classList.add('options');
        let buttonWrapper=document.createElement('div');
        let button=document.createElement('button')
        button.innerText="submit"
        button.type="submit";
        buttonWrapper.append(button);

        activeQuestion.options.forEach((option,index)=>{
            let input=document.createElement('input');
            let div=document.createElement('div')
            input.id=`option-${index}`;
            input.type="radio";
            input.name="options";
            input.value=option;
            let label=document.createElement('label')
            label.for='option-${index}';
            label.innerText=option;
            form.addEventListener('submit',(event)=>{
                event.preventDefault()
                if(input.checked){
                    alert(activeQuestion.isCorrect(input.value))
                }
            })
            div.append(input,label);

            optionsElm.append(div)
        })
        p.innerText=`Total Question :${this.questions.length}`
        fieldset.append(legend,optionsElm,buttonWrapper);
        form.append(fieldset);
        quizElm.append(form)
    }
    




}

let quiz = new Quiz();

quizCollection.forEach((question) =>{
    quiz.addQuestion(question.title,question.options,question.answerIndex);
    
})



next.addEventListener("click",quiz.nextQuestion.bind(quiz))
prev.addEventListener("click",quiz.prevQuestion.bind(quiz))

Quiz.createUI()