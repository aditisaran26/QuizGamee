import React from 'react'

function Result(props) {
  return (
    <>
    <div className='show-score'>
      Your score : {props.score}<br/>
      Total Score :{props.totalScore}
    </div>
    <button id='next-button' onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default Result
