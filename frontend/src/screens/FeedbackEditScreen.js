import React, { useState, useEffect } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const FeedbackEditScreen = ({ history }) => {
  const [name, setName] = useState('');
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
        setName(user.name);
        setFeedback([...feedback, ...userInfo.feedback]);
      }
    }
  }, [dispatch, history, userInfo, user, success]);

  const submitHandler = () => {
    console.log('Submitted!');
  };

  return (
    <>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">Feedback Updated</Message>}
      {loading && <Loader />}
      <h1 className="text-center">Edit Feedback</h1>
      {feedback.map((feedbackItem) => (
        <>
          <h4>{feedbackItem.category.toUpperCase()}</h4>
          <Form>
            <Row>
              <Col>
                <Form.Group>
                  <Form.Label>0/5</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder={feedbackItem[0]}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col}>
                  <Form.Label>1/5</Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder={feedbackItem[1]}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group as={Col}>
                  <Form.Label>2/5</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder={feedbackItem[2]}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col}>
                  <Form.Label>3/5</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder={feedbackItem[3]}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group as={Col}>
                  <Form.Label>4/5</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder={feedbackItem[4]}
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Col}>
                  <Form.Label>5/5</Form.Label>
                  <Form.Control
                    type="text"
                    as="textarea"
                    placeholder={feedbackItem[5]}
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </>
      ))}
      <Button type="submit" variant="primary">
        Save Changes
      </Button>
    </>
  );
};

export default FeedbackEditScreen;
