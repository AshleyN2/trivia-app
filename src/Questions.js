import React, { useState, useEffect } from 'react'


const Questions = ({questions}) => {
    

    function handleSubmit(event) {
        event.preventDefault();
      }

      return(
        <div>
            {questions.map(question=>(
                <div>
                    <h2>
                        {question.question}
                    </h2>
                </div>
            ))}
        </div>
      )
}
    
export default Questions;
