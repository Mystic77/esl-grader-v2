import React, { useState, useEffect } from 'react';
import { Container, Form, Row, Col } from 'react-bootstrap';
import FeedbackCard from '../components/FeedbackCard';
import axios from 'axios';

const HomeScreen = () => {
  const [feedback, setFeedback] = useState([]);

  const [score, setScore] = useState({
    pronunciation: 0,
    fluency: 0,
    grammar: 0,
    vocabulary: 0,
    content: 0,
  });

  useEffect(() => {
    const fetchFeedback = async () => {
      const { data } = await axios.get('/api/feedback');

      setFeedback(data);
    };

    fetchFeedback();
  }, [score]);

  const scoreChangeHandler = (event) => {
    const updateScore = event.target.value;
    const updateCategory = event.target.name;

    setScore({ [updateCategory]: updateScore });
  };

  return (
    <div>
      <h1>Rubric</h1>
      <Container className="text-center">
        <Form onChange={scoreChangeHandler}>
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
                    value="0"
                    type="radio"
                    name={item.category}
                    id={`${item.category}0`}
                  />
                  <Form.Check
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    name={item.category}
                    id={`${item.category}1`}
                  />
                  <Form.Check
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    name={item.category}
                    id={`${item.category}2`}
                  />
                  <Form.Check
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    name={item.category}
                    id={`${item.category}3`}
                  />
                  <Form.Check
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    name={item.category}
                    id={`${item.category}4`}
                  />
                  <Form.Check
                    inline
                    label="5"
                    value="5"
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
              <FeedbackCard feedbackItem={feedbackItem} score={score} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default HomeScreen;
