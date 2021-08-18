import React from 'react';
import { Card } from 'react-bootstrap';

const ReportCard = () => {
  return (
    <div>
      <Card>
        <Card.Header as="h2">Report Card</Card.Header>
        <Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ReportCard;
