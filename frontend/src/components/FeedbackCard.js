import React from 'react';
import { Card } from 'react-bootstrap';

const FeedbackCard = ({ feedbackItem, score }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Title as="h5">{feedbackItem.category.toUpperCase()}: /5</Card.Title>
      <Card.Body>{feedbackItem.feedback[score]}</Card.Body>
    </Card>
  );
};

export default FeedbackCard;
