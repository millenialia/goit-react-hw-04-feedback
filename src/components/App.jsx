import { Component, useCallback, useEffect, useState } from "react";
import { Section } from 'components/Section/Section'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from 'components/Statistics/Statistics'
import { Notification } from "components/NoFeedback/NoFeedback";

import css  from "./App.module.css";

export const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onLeaveFeedback = e => {
    const feedback = e.target.name;

    // this.setState( prevState => {
    //   return { [feedback]: prevState[feedback] + 1 };
    // })

    if (feedback === "good") {
      setGood(good+1)
    } else if(feedback === "neutral") {
      setNeutral(neutral+1)
    } else if(feedback === "bad") {
      setBad(bad+1)
    }
  }

  const countTotalFeedback = useCallback(() => {
    let total = good + neutral + bad;
    return total;
  }, [good, neutral, bad])



  const countPositiveFeedbackPercentage = useCallback(() => {
    let positivePct = (Number(countTotalFeedback() === 0 ? 0 : (good / countTotalFeedback()) * 100).toFixed(0))
    return positivePct
  }, [good, neutral, bad, countTotalFeedback]);

  useEffect(() => {
    countTotalFeedback()
    countPositiveFeedbackPercentage()
  }, [countTotalFeedback, countPositiveFeedbackPercentage])

    return (
      <div className={css.feedbackForm}>
        <Section
          title="Please leave us feedback"
          className = "feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={onLeaveFeedback}/>
        </Section>
        <Section
          title="Statistics"
          className = "statistics">
          {countTotalFeedback()
            ?
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positiveFeedbacks={countPositiveFeedbackPercentage()}
            />
            :
            <Notification message="There is no feedback" />}
        </Section>
        </div>
    );
};
