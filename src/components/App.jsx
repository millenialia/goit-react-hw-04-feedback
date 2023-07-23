import { Component } from "react";
import { Section } from 'components/Section/Section'
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions'
import { Statistics } from 'components/Statistics/Statistics'
import { Notification } from "components/NoFeedback/NoFeedback";

import css  from "./App.module.css";

export class App extends Component {

  state = {
      good: 0,
      neutral: 0,
      bad: 0
    };

  onLeaveFeedback = e => {
    const feedback = e.target.name;
    this.setState( prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    })
  }

  countTotalFeedback() {
    const {good, neutral, bad} = this.state
    let total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const { good } = this.state

    let positivePct = (Number(this.countTotalFeedback() === 0 ? 0 : (good / this.countTotalFeedback()) * 100).toFixed(0))
    return positivePct
  }


  render() {

    return (
      <div className={css.feedbackForm}>
        <Section
          title="Please leave us feedback"
          className = "feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>
        <Section
          title="Statistics"
          className = "statistics">
          {this.countTotalFeedback()
            ?
            <Statistics
              options={Object.keys(this.state)}
              values={Object.values(this.state)}
              total={this.countTotalFeedback()}
              positiveFeedbacks={this.countPositiveFeedbackPercentage()}
            />
            :
            <Notification message="There is no feedback" />}
        </Section>



        </div>
    );
  }
};
