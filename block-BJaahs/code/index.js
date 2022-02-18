const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
  };


  //without object
let title=testData.title;
let option=testData.options[0];
let correctAnswerIndex=1;


function isAnswerCorrect(option){
  if(option==="Amaan"){
    return getCorrectAnswer(option);
  }else
  {
    return `false`
  }
}
function getCorrectAnswer(option){
    return option;

}


//organize using object



let userInfo={  
  title:testData.title,
  option:testData.options[0],
  correctAnswerIndex:1,
  isAnswerCorrect(userInfo){
    if(userInfo.option=="Amaan"){
      return getCorrectAnswer(userInfo.option);
    }
    else{
     return `false`
     }
  },
    getCorrectAnswer(userInfo){
        return userInfo.option;
    }
}


//use function to create object

function userInfo(testData){
let data={};
data.title=testData.title;
data.option=testData.option[0];
data.correctAnswerIndex=1;
data.isAnswerCorrect=function(data){
    if(data.option=="Amaan"){
      return getCorrectAnswer(data.option);
    }
    else{
     return `false`
     }
  };
data.getCorrectAnswer=function(data){
   return data.option;
}
return data;
};




//use this object


function userInfo(testData){
let data={};
data.title=testData.title;
data.option=testData.option[0];
data.correctAnswerIndex=1;
data.isAnswerCorrect=function(data){
    if(this.option=="Amaan"){
      return getCorrectAnswer(this.option);
    }
    else{
     return `false`
     }
  };
data.getCorrectAnswer=function(data){
   return this.option;
}
return data;
};

