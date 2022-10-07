import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Quiz = () => {
  const [questions, setQuestions] = useState([]);

  // Add useEffect hook
  useEffect(() => {
    fetch("http://localhost:3000/questions")
      .then((r) => r.json())
      .then((questions) => {
        setQuestions(questions);
      });
  }, []);
  
        
  
    return (
        <div className="quiz"
        style={{ 
          backgroundColor: 'papayawhip',
          width:'100%'
        }}>
          <form className="quizform" action="">
            <h2>quiz selection</h2>
            <div className="form-control">
              <label className='question-label'>number of questions</label>
              <input type="number" className="form-input" min={1} max={50}/>
            </div>
            {/* {category} */}
            <div className="category-control">
              <label className='category-label'>category</label>
              <select className="form-input">
                <option value="comics">Computer</option>
                
              </select>
              <div className="form-control">
            {/*{difficulty}*/}
              <label className='difficulty'>Select difficulty</label>
              <select className="form-input" >
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
              </div>
              <button type="submit" className="submit-btn">
                start
              </button>
            </div>
        </form>
      </div>
    );
  };
  
  export default Quiz;