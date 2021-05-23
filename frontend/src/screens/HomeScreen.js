import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Row, Col } from 'react-bootstrap';
import FeedbackCard from '../components/FeedbackCard';
import Message from '../components/Message';
import Loader from '../components/Loader';

const HomeScreen = ({ location, history }) => {
  const dispatch = useDispatch();

  // const userList = useSelector((state) => state.userList);
  // const { loading, error, users } = userList;

  const [score, setScore] = useState({
    //   pronunciation: 0,
    //   fluency: 0,
    //   grammar: 0,
    //   vocabulary: 0,
    //   content: 0,
  });

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
    <div>
      <h1>Rubric</h1>
    </div>
  );
};

export default HomeScreen;
