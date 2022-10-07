import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Questions from "./Questions";

const Quiz = () => {
  const [quiz,setQuiz]=useState({
    amount: 10,
    category: "computers",
    difficulty: "easy",
  });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const { amount, category, difficulty } = quiz;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuiz({ ...quiz, [name]: value });
  };

  
  /*
  const [category, setCategory]=useState('')
  const [difficulty,setDifficulty]=useState('')
  //questions.map(question=>console.log(question.category))
  questions.map(question=>setCategory(question.category))
*/

  const navigate=useNavigate()
  function handleClick(){
    navigate(
      '/questions'
    )
  }
  
    return (
        <div className="quiz"
        style={{ 
          backgroundColor: 'papayawhip',
          width:'100%'
        }}>
          <form className="quizform" onSubmit={handleSubmit} action="">
            <h2>quiz selection</h2>
            <div className="form-control">
              <label className='question-label'>number of questions</label>
              <input type="number" className="form-input" min={1} max={50}/>
            </div>
            {/* {category} */}
            <div className="category-control">
              <label className='category-label'>category</label>
              <select className="form-input">
                <option value={quiz.category} onChange={handleChange}>Computer</option>
                
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
              <button type="submit" className="submit-btn" onClick={handleClick}>
                start
              </button>
            </div>
        </form>
      </div>
    );
  };
}
  export default Quiz;