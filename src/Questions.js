import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';


const Questions = ({questions}) => {
    
    

    function handleSubmit(event) {
        event.preventDefault();
      }

      return(
        <div>
            {questions.map(question=> (
                <div>
                    <h3>
                        {question.question}
                    </h3>
                </div>
            ))}
        </div>
      )
}
    
export default Questions;
