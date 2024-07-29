import css from "./Feedback.module.css";
const Feedback = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {
  return (
    <ul className={css.feedbackList}>
      <li className={css.feedbackItem}>Good: {good}</li>
      <li className={css.feedbackItem}>Neutral: {neutral}</li>
      <li className={css.feedbackItem}>Bad: {bad} </li>
      <li className={css.feedbackItem}>Total: {totalFeedback}</li>
      <li className={css.feedbackItem}>Positive: {positiveFeedback}%</li>
    </ul>
  );
};

export default Feedback;