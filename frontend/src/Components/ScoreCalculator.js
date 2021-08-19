import React from 'react';
import { Row, Col } from 'react-bootstrap';

const ScoreCalculator = ({ scores, feedback }) => {
  const scoreValues = Object.values(scores);
  const totalScore = scoreValues.reduce((a, b) => a + b, 0);

  const maxScoreArray = feedback.map((feedbackItem) => {
    return feedbackItem.mainText.length - 1;
  });
  const maxScore = maxScoreArray.reduce(
    (total, iterator) => total + iterator,
    0
  );
  const percentage = (parseInt(totalScore) / parseInt(maxScore)) * 100;

  return (
    <div>
      <Row>
        <Col>
          <h4>
            {console.log(scoreValues)}
            Total Points: {totalScore}/{maxScore}
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
