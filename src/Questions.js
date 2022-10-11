import React, { useState, useEffect } from 'react'
import {useParams} from 'react-router-dom';


const Questions = ({questions}) => {
    
    

    function handleSubmit(event) {
        event.preventDefault();
      }

      return(
        <div className='questions'>
            {questions.map(question=> (
                <div>
                    <li>
                        {question.question}
                    </li>
                </div>
            ))}
        </div>
      )
}
    
export default Questions;
