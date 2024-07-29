import { useState, useEffect } from "react";
import './App.css'
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Description from "./components/Description/Description";
import Notification from "./components/Notification/Notification";



const App = () => {
  const [feedback, setFeedback] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("feedbackValue")) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });


 useEffect(() => {
    window.localStorage.setItem("feedbackValue", JSON.stringify(feedback));
  }, [feedback]);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  let positiveFeedback = 0;
  totalFeedback === 0
    ? (positiveFeedback = 0)
    : (positiveFeedback = Math.round((feedback.good / totalFeedback) * 100));

  const updateFeedback = (feedbackType) => {
    setFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  };

  const resetState = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  return (
    <>
      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetState={resetState}
        totalFeedback={totalFeedback}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          good={feedback.good}
          neutral={feedback.neutral}
          bad={feedback.bad}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
