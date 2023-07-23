import PropTypes from "prop-types";
import css  from "./Statistics.module.css";

export const Statistics = ({ good, neutral, bad, total, positiveFeedbacks }) => {
    return (
       <ul className={css.statisticsList}>
        <li>Good: {good} </li>
        <li>Neutral: {neutral}</li>
        <li>Bad: {bad}</li>
        <li>Total: {total}</li>
        <li>Positive feedbacks: {positiveFeedbacks}%</li>
      </ul>
  )
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.string.isRequired,
}
