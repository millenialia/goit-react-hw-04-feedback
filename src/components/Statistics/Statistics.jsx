import PropTypes from "prop-types";
import css  from "./Statistics.module.css";

export const Statistics = ({ options, values, total, positiveFeedbacks }) => {
    return (
       <ul className={css.statisticsList}>
        <li>{options[0]}: {values[0]} </li>
        <li>{ options[1]}: {values[1]}</li>
        <li>{ options[2]}: {values[2]}</li>
        <li>Total: {total}</li>
        <li>Positive feedbacks: {positiveFeedbacks}%</li>
      </ul>
  )
}

Statistics.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  values: PropTypes.arrayOf(PropTypes.number).isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedbacks: PropTypes.string.isRequired,
}
