import React from 'react';
import { Card } from 'react-bootstrap';

const ReportCard = ({ feedback, scores }) => {
  const scoresEntries = Object.entries(scores);

  return (
    <div>
      {feedback.map((feedbackItem) =>
        scoresEntries.map(
          (result) =>
            feedbackItem.category === result[0] && (
              <Card>
                <Card.Header as="h2">
                  {result[0]} {result[1]}/5
                </Card.Header>
                <Card.Body>
                  <Card.Text>{feedbackItem.mainText[result[1]]}</Card.Text>
                </Card.Body>
              </Card>
            )
        )
      )}
    </div>
  );
};

export default ReportCard;
