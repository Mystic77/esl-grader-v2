import React from 'react';
import { Card } from 'react-bootstrap';

const ReportCard = ({ feedback, scores, commonErrors }) => {
  const scoresEntries = Object.entries(scores);
  const errorsEntries = Object.entries(commonErrors);

  return (
    <div>
      {feedback.map((feedbackItem) => (
        <Card>
          {scoresEntries.map(
            (result) =>
              feedbackItem.category === result[0] && (
                <>
                  <Card.Header as="h2">
                    {result[0]} {result[1]}/5
                  </Card.Header>
                  <Card.Body>
                    <Card.Text>{feedbackItem.mainText[result[1]]}</Card.Text>
                  </Card.Body>
                </>
              )
          )}
          {feedbackItem.commonErrors.map((commonError) =>
            errorsEntries.map(
              (error) =>
                commonError.name === error[0] &&
                error[1] === true && (
                  <Card.Body>
                    <Card.Text>
                      {commonError.name}: {commonError.text}
                    </Card.Text>
                  </Card.Body>
                )
            )
          )}
        </Card>
      ))}
    </div>
  );
};

export default ReportCard;
