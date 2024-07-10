import React from "react";
import css from "../Options/Options.module.css";

const Options = ({ updateFeedback, resetFeedback }) => {
  return (
    <div>
      <button className={css.optionsBtn} onClick={() => updateFeedback("good")}>
        Good
      </button>
      <button
        className={css.optionsBtn}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button className={css.optionsBtn} onClick={() => updateFeedback("bad")}>
        Bad
      </button>
      <button className={css.optionsBtn} onClick={resetFeedback}>
        Reset
      </button>
    </div>
  );
};

export default Options;
