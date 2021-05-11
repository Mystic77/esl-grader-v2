import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Form, Row, Col } from 'react-bootstrap';
import FeedbackCard from '../components/FeedbackCard';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { listUsers } from '../actions/userActions';

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

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (!userInfo) {
      history.push(redirect);
    }

    dispatch(listUsers());
  }, [dispatch]);

  const scoreChangeHandler = (event) => {
    //   const updateScore = event.target.value;
    //   const updateCategory = event.target.name;
    //   setScore({ [updateCategory]: updateScore });
  };

  return (
    <div>
      <h1>Rubric</h1>
      {/* <Container className="text-center">
        <Form onChange={scoreChangeHandler}>
          {users.map((user) => (
            <>
              <fieldset id={user.category}>
                <div key={`inline-${user._id}`} className="mb-3">
                  <Form.Label className="mr-5">
                    {user.feedback[0].category.toUpperCase()}
                  </Form.Label>
                  <Form.Check
                    inline
                    label="0"
                    value="0"
                    type="radio"
                    name={user.category}
                    id={`${user.category}0`}
                  />
                  <Form.Check
                    inline
                    label="1"
                    value="1"
                    type="radio"
                    name={user.category}
                    id={`${user.category}1`}
                  />
                  <Form.Check
                    inline
                    label="2"
                    value="2"
                    type="radio"
                    name={user.category}
                    id={`${user.category}2`}
                  />
                  <Form.Check
                    inline
                    label="3"
                    value="3"
                    type="radio"
                    name={user.category}
                    id={`${user.category}3`}
                  />
                  <Form.Check
                    inline
                    label="4"
                    value="4"
                    type="radio"
                    name={user.category}
                    id={`${user.category}4`}
                  />
                  <Form.Check
                    inline
                    label="5"
                    value="5"
                    type="radio"
                    name={user.category}
                    id={`${user.category}5`}
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
          {users.map((user) => (
            <Col sm={12} md={6} lg={4} xl={3}>
              <FeedbackCard user={user} score={score} />
            </Col>
          ))}
        </Row>
      </Container> */}
    </div>
  );
};

export default HomeScreen;
