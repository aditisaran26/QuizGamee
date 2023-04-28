import React, { useState } from 'react'
import { QuizData } from './Data'
import Result from './Result';

function Quiz() {
    //state to track question number
    const [currentQuestion , setCurrentQuestion]=useState(0);

    let handlechange = () =>{
        updatescore();
        if(currentQuestion < QuizData.length-1)
        {
        setCurrentQuestion(currentQuestion+1);
        setClickOption(0);
        }else{
            setShowResult(true);
        }
    }
    let handleback=()=>{
        if(currentQuestion==0)
        {

        }
        setCurrentQuestion(currentQuestion-1);
    }

    const [score , setScore]=useState(0);
    const [clickOption,setClickOption]=useState(0);

    const updatescore =()=>{
        if(clickOption === QuizData[currentQuestion].answer)
        {
            setScore(score+1);
        }
    }
    const[showResult,setShowResult]=useState(false);
    const playagain = () =>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickOption(0);
        setScore(0);

    }
    return (
    <div>
      <h1 className='heading'>QUIZ</h1>
      <div className='container'>
        {showResult ? (
            <Result score={score} totalScore={QuizData.length} tryAgain={playagain}/>
        ):(
            <>
        <div className='question'>
            <span id='question-number'>{currentQuestion+1}</span>
            <span id='question-text'>{QuizData[currentQuestion].question}</span>
        </div>
        <div className='options'>
        {QuizData[currentQuestion].options.map((option,i)=>{
                return(
                    <button className={`options-button ${clickOption==i+1 ? 'checked': null}`} key={i} onClick={()=>setClickOption(i+1)}>
                        {option}
                    </button>
                )
            })}
        </div>
        <input type='button' value='Next' id='next-button' onClick={handlechange}/>
        <input type='button' value='Back' id='back-button' onClick={handleback}/>
        </>
        )}
      </div>
    </div>
  )
}

export default Quiz
