import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ScoreCalculator = ({ scores, feedback }) => {
  const totalScore = Object.values(scores).reduce((a, b) => a + b);

  const maxScoreArray = feedback.map((feedbackItem) => {
    return feedbackItem.mainText.length - 1;
  });
  const maxScore = maxScoreArray.reduce((total, iterator) => total + iterator);
  const percentage = (totalScore / maxScore) * 100;

  return (
    <div>
      <Row>
        <Col>
          <h4>
            Total Points: {totalScore} of {maxScore}
          </h4>
        </Col>
        <Col>
          <h4>Percentage: {percentage}%</h4>
        </Col>
      </Row>
    </div>
  );
};

export default ScoreCalculator;
