import React, { useState, useEffect } from "react";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";

const feedbackValues = {
  good: 0,
  bad: 0,
  neutral: 0,
};

function App() {
  const [feedbackData, setFeedbackData] = useState(() => {
    const storedFeedback = localStorage.getItem("feedbackData");
    return storedFeedback ? JSON.parse(storedFeedback) : feedbackValues;
  });

  const updateFeedback = (feedbackType) => {
    setFeedbackData((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback = Object.values(feedbackData).reduce(
    (acc, curr) => acc + curr,
    0
  );

  const positiveFeedback =
    totalFeedback !== 0
      ? Math.round((feedbackData.good / totalFeedback) * 100)
      : 0;

  const resetFeedback = () => {
    setFeedbackData(feedbackValues);
  };

  useEffect(() => {
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
  }, [feedbackData]);

  return (
    <>
      <Description />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        total={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedbackData={feedbackData}
          total={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
