import React, { useState, useEffect } from 'react';
import {
  InputGroup,
  Form,
  Dropdown,
  DropdownButton,
  Row,
  Col,
  Button,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const FeedbackEditScreen = ({ history }) => {
  const [feedback, setFeedback] = useState([]);
  const [category, setCategory] = useState('');
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

  return (
    <FormContainer>
      <h2 className="my-5">Edit Feedback</h2>
      {message && <Message variant="danger">{message}</Message>}
      {error && <Message variant="danger">{error}</Message>}
      {success && <Message variant="success">Feedback Updated</Message>}
      {loading && <Loader />}
      {feedback.map((feedbackItem) => (
        <Form>
          <Form.Group>
            <DropdownButton
              id="category"
              title={feedbackItem.category.toUpperCase()}
            >
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>0/5</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="textarea" placeholder={feedbackItem[0]} />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>1/5</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="textarea" placeholder={feedbackItem[1]} />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>2/5</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="textarea" placeholder={feedbackItem[2]} />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>3/5</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="textarea" placeholder={feedbackItem[3]} />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>4/5</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="textarea" placeholder={feedbackItem[4]} />
              </InputGroup>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>5/5</InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control as="textarea" placeholder={feedbackItem[5]} />
              </InputGroup>
            </DropdownButton>
          </Form.Group>
        </Form>
      ))}
    </FormContainer>
  );
};

export default FeedbackEditScreen;
