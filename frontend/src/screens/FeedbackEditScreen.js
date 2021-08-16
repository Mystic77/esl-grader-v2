import React, { useState, useEffect } from 'react';
import { Form, Button, InputGroup } from 'react-bootstrap';

import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const FeedbackEditScreen = ({ history }) => {
  const [feedback, setFeedback] = useState([]);
  const [message, setMessage] = useState(null);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      if (!user || !user.name || success) {
        dispatch({ type: USER_UPDATE_PROFILE_RESET });
        dispatch(getUserDetails('profile'));
      } else {
        setFeedback([...feedback, ...user.feedback]);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateUserProfile({ id: user._id, feedback }));
  };

  return (
    <FormContainer>
      <h2 className="my-5">Edit Feedback</h2>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">Feedback Updated</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <Form.Group>
          <Button type="submit" variant="primary">
            Update
          </Button>
        </Form.Group>

        {feedback.map((feedbackItem, index) => (
          <div key={index}>
            <Form.Group>
              <Form.Control
                type="text"
                value={feedbackItem.category}
                onChange={(e) => {
                  feedbackItem.category = e.target.value;
                  setFeedback([...feedback]);
                  console.log(feedback);
                }}
              ></Form.Control>
            </Form.Group>

            {feedbackItem.mainText.map((mainText, index) => (
              <Form.Group key={feedbackItem.category + index}>
                <InputGroup>
                  <InputGroup.Text>{index}/5</InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    aria-label=""
                    value={mainText}
                    onChange={(e) => {
                      feedbackItem.mainText[index] = e.target.value;
                      setFeedback([...feedback]);
                      console.log(feedback);
                    }}
                  />
                </InputGroup>
              </Form.Group>
            ))}
          </div>
        ))}
      </Form>
    </FormContainer>
  );
};

export default FeedbackEditScreen;
