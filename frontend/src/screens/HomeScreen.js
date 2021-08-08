import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Row, Col } from 'react-bootstrap';
import FormContainer from '../components/FormContainer';
import FeedbackCard from '../components/FeedbackCard';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  // const [score, setScore] = useState({
  //   //   pronunciation: 0,
  //   //   fluency: 0,
  //   //   grammar: 0,
  //   //   vocabulary: 0,
  //   //   content: 0,
  // });

  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  const redirect = location.search ? location.search.split('=')[1] : '/login';

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect);
    }
  });

  const scoreChangeHandler = (e) => {
    e.preventDefault();
    console.log('Score changed!');
    //   const updateScore = event.target.value;
    //   const updateCategory = event.target.name;
    //   setScore({ [updateCategory]: updateScore });
  };

  return (
    <FormContainer>
      <h1>Rubric</h1>
      <Form>
        <div className="mb-3">
          <Form.Check inline label="0" name="pronunciation" type="radio" />
          <Form.Check inline label="1" name="pronunciation" type="radio" />
          <Form.Check inline label="2" name="pronunciation" type="radio" />
          <Form.Check inline label="3" name="pronunciation" type="radio" />
          <Form.Check inline label="4" name="pronunciation" type="radio" />
          <Form.Check inline label="5" name="pronunciation" type="radio" />
        </div>
      </Form>
    </FormContainer>
  );
};

export default HomeScreen;
