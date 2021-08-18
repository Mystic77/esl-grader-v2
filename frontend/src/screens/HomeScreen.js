import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import ScoreCalculator from '../components/ScoreCalculator';
import ReportCard from '../components/ReportCard';

import { getUserDetails } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const FeedbackEditScreen = ({ history }) => {
  const [feedback, setFeedback] = useState([]);
  const [scores, setScores] = useState({});
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
      } else {
        setFeedback([...feedback, ...user.feedback]);
      }
    }
  }, [dispatch, history, userInfo, user, scores]);

  return (
    <FormContainer>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {loading && <Loader />}
      <Form>
        {feedback.map((feedbackItem, index) => (
          <div key={index}>
            <Form.Group>
              <h2>{feedbackItem.category}</h2>
            </Form.Group>

            <Form.Group>
              {feedbackItem.mainText.map((mainText, index) => (
                <Form.Check
                  inline
                  label={index}
                  name={feedbackItem.category}
                  type="radio"
                  id={feedbackItem.category + index}
                  onChange={() => {
                    setScores({
                      ...scores,
                      [feedbackItem.category]: index,
                    });
                    console.log(
                      `${feedbackItem.category} changed to ${index}!`
                    );
                    console.log(scores);
                  }}
                />
              ))}
            </Form.Group>
          </div>
        ))}
      </Form>

      <ScoreCalculator />
      <ReportCard />
    </FormContainer>
  );
};

export default FeedbackEditScreen;
