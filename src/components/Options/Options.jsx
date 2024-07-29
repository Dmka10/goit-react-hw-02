import css from "./Options.module.css";

const Options = ({ updateFeedback, resetState, totalFeedback }) => {
  return (
    <div className={css.options}>
      <button
        className={css.optionsBtn}
        type="button"
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>

      <button
        className={css.optionsBtn}
        type="button"
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>

      <button
        className={css.optionsBtn}
        type="button"
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>

      {totalFeedback != 0 && (
        <button className={css.optionsBtn} type="button" onClick={resetState}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;