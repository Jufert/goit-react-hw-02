import css from "../Feedback/Feedback.module.css";
import React from "react";

const Feedback = ({ feedbackData, total, positiveFeedback }) => {
  return (
    <div>
      <ul className={css.feedbackUl}>
        <li>
          <p>Good: {feedbackData.good}</p>
        </li>
        <li>
          <p>Neutral: {feedbackData.neutral}</p>
        </li>
        <li>
          <p>Bad: {feedbackData.bad}</p>
        </li>
        <li>
          <p>Total: {total}</p>
        </li>
        <li>
          <p>Positive: {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
};

export default Feedback;
