import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeScreen from './components/HomeScreen';
import LoginScreen from './components/LoginScreen';
import FeedbackEditScreen from './components/FeedbackEditScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/login" component={LoginScreen} />
          <Route path="/edit" component={FeedbackEditScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
