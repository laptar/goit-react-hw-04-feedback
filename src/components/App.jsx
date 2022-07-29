import React, { useState } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [points, setPoints] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const hendleAddFeedback = evt => {
    const btn = evt.target.name;
    setPoints(prev => ({ ...prev, [btn]: prev[btn] + 1 }));
  };
  const countTotalFeedback = () => {
    return Object.values(points).reduce((acc, el) => acc + el);
  };
  const countPositiveFeedbackPercentage = () => {
    return parseInt((points.good / countTotalFeedback()) * 100);
  };
  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions addFeedback={hendleAddFeedback} />
      </Section>
      <Section title={'Statistics'}>
        <Statistics
          good={points.good}
          neutral={points.neutral}
          bad={points.bad}
          total={countTotalFeedback()}
          positivePercentage={countPositiveFeedbackPercentage()}
        />
      </Section>
    </>
  );
};
