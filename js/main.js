'use strict';
{  
  const words=[
    'javascript',
    'html',
  ]
  
  let word;
  let loc=0;
  let missType=0;
  let typingCount=0;
  let startTime;
  let finishTime;
  let playGaming=false;

  function setWord(){
    word=words.splice(Math.floor(Math.random()*words.length),1)[0];
    typingCount+=word.length;
    target.textContent=word;
    let loc=0;
  }

  const target=document.getElementById('target');
  
  target.addEventListener('click',()=>{
    startTime=Date.now();
    if(playGaming === true){
      return;
    }
    playGaming=true;
    setWord();
  });

  function resultCalc(){
    const time=document.getElementById('time');
    finishTime=((Date.now()-startTime)/1000).toFixed(2);
    time.textContent=finishTime;
    
    const miss=document.getElementById('miss');
    miss.textContent=missType;

    const count=document.getElementById('count');
    count.textContent=typingCount;

    const accuracy=document.getElementById('accuracy');
    const accuracyCalc=Math.round((typingCount-missType)/typingCount*100);
    accuracy.textContent=`${accuracyCalc}%`;
  }
  
  function resultShow(){
    resultCalc();
    const result=document.getElementById('result');
    result.classList.add('show');
  }
  
  document.addEventListener('keydown',e =>{
    if(e.key !== word[loc]){
      missType++;
      return;
    }
    loc++;
    target.textContent='_'.repeat(loc)+word.substring(loc);
    
    if(word.length === loc){
      if(words.length === 0){
        resultShow();
        return;
      }
      setWord();
    }
  });
}