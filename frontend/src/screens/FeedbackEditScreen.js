import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { getUserDetails, updateUserProfile } from '../actions/userActions';
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants';

const NewFeedbackEdit = ({ history }) => {
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
        <Table striped bordered hover>
          <thead>
            <tr>
              <th colspan="3">{feedbackItem.category.toUpperCase()}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>0/5</td>
              <td>{feedbackItem[0]}</td>
            </tr>
            <tr>
              <td>1/5</td>
              <td>{feedbackItem[1]}</td>
            </tr>
            <tr>
              <td>2/5</td>
              <td>{feedbackItem[2]}</td>
            </tr>
            <tr>
              <td>3/5</td>
              <td>{feedbackItem[3]}</td>
            </tr>
            <tr>
              <td>4/5</td>
              <td>{feedbackItem[4]}</td>
            </tr>
            <tr>
              <td>5/5</td>
              <td>{feedbackItem[5]}</td>
            </tr>
          </tbody>
        </Table>
      ))}
    </FormContainer>
  );
};

export default NewFeedbackEdit;
