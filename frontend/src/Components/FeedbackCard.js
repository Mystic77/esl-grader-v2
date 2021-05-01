import React from 'react';
import { Card } from 'react-bootstrap';

const FeedbackCard = ({ feedbackItem }) => {
  return (
    <Card className="my-3 p-3 rounded">
      <Card.Title as="h5">{feedbackItem.category.toUpperCase()}: /5</Card.Title>
      <Card.Body>{feedbackItem.feedback[0]}</Card.Body>
    </Card>
  );
};

export default FeedbackCard;
