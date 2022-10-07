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

  function handleDeleteClick(id) {
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        const updatedQuestions = questions.filter((q) => q.id !== id);
        setQuestions(updatedQuestions);
      });
  }

  function handleAnswerChange(id, correctIndex) {
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ correctIndex }),
    })
      .then((r) => r.json())
      .then((updatedQuestion) => {
        const updatedQuestions = questions.map((q) => {
          if (q.id === updatedQuestion.id) return updatedQuestion;
          return q;
        });
        setQuestions(updatedQuestions);
      });
  }

  const questionItems = questions.map((q) => (
    <QuestionItem key={q.id} question={q} onDeleteClick={handleDeleteClick} onAnswerChange={handleAnswerChange}/>
  ));
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionItems}</ul>
    </section>
  );
}

export default Quiz;
  

  /*
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
            
            <div className="category-control">
              <label className='category-label'>category</label>
              <select className="form-input">
                <option value="comics">Comics</option>
                <option value="history">History</option>
                <option value="politics">Politics</option>
              </select>
              <div className="form-control">
            
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
  */
  