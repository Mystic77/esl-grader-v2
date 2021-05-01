import React from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import FeedbackCard from '../components/FeedbackCard';
import feedback from '../feedback';

const HomeScreen = () => {
  return (
    <div>
      <Container className="text-center">
        <Form>
          {feedback.map((item) => (
            <>
              <fieldset id={item.category}>
                <div key={`inline-${item._id}`} className="mb-3">
                  <Form.Label className="mr-5">
                    {item.category.toUpperCase()}
                  </Form.Label>
                  <Form.Check
                    inline
                    label="0"
                    type="radio"
                    name={item.category}
                    id={`${item.category}0`}
                  />
                  <Form.Check
                    inline
                    label="1"
                    type="radio"
                    name={item.category}
                    id={`${item.category}1`}
                  />
                  <Form.Check
                    inline
                    label="2"
                    type="radio"
                    name={item.category}
                    id={`${item.category}2`}
                  />
                  <Form.Check
                    inline
                    label="3"
                    type="radio"
                    name={item.category}
                    id={`${item.category}3`}
                  />
                  <Form.Check
                    inline
                    label="4"
                    type="radio"
                    name={item.category}
                    id={`${item.category}4`}
                  />
                  <Form.Check
                    inline
                    label="5"
                    type="radio"
                    name={item.category}
                    id={`${item.category}5`}
                  />
                </div>
              </fieldset>
            </>
          ))}
        </Form>
      </Container>
      <Container>
        <h1>Feedback</h1>
        <Row>
          {feedback.map((feedbackItem) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <FeedbackCard feedbackItem={feedbackItem} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
