import { Global } from '@emotion/react';
import { Layout } from './Layout/Layout';
import { Style } from './GlobalStyle';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Component } from 'react';
import { Notification } from './Notification/Notification';
import { IconsOptions } from './constant';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  leaveFeedback = name => {
    this.setState(pervState => ({
      [name]: pervState[name] + 1,
    }));
  };

  countTotalFeedback = () =>
    this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good / this.countTotalFeedback()) * 100) || 0;

  render() {
    const total = this.countTotalFeedback();
    const { good, neutral, bad } = this.state;
    const positivePercent = this.countPositiveFeedbackPercentage();
    return (
      <Layout>
        <FeedbackOptions
          options={IconsOptions}
          onLeaveFeedback={this.leaveFeedback}
        ></FeedbackOptions>
        {!total ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercent}
          ></Statistics>
        )}
        <Global styles={Style} />
      </Layout>
    );
  }
}
