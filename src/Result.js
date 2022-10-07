import React from "react";
import { useNavigate } from 'react-router-dom';

const Quiz = () => {
  const navigate = useNavigate()
  const { quiz, handleChange, handleSubmit, error } = navigate

  const { isModalOpen, closeModal, correct, questions } = navigate
  return (
    <div
      className={`${isModalOpen ? "modal-container isOpen" : "modal-container"}`}>
      <div className="modal-content">
        <h2>congrats!</h2>
        <p>
          You answered {((correct / questions.length) * 100).toFixed(0)}% of
          questions correctly
        </p>
        <button className="close-btn" onClick={closeModal}>
          Play again
        </button>
      </div>
    </div>
  )
  }

export default Quiz;








