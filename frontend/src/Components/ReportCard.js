import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { FaArrowDown } from 'react-icons/fa';

const ReportCard = ({ feedback, scores, commonErrors }) => {
  const scoresEntries = Object.entries(scores);
  const errorsEntries = Object.entries(commonErrors);

  function copyToClip() {
    let str = document.getElementById('feedback').innerHTML;

    function listener(e) {
      e.clipboardData.setData('text/html', str);
      e.clipboardData.setData('text/plain', str);
      e.preventDefault();
    }
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);

    document.getElementById('copy').innerHTML = 'Copied!';
    setTimeout(function () {
      document.getElementById('copy').innerHTML = 'Copy to Clipboard';
    }, 1000);
  }

  return (
    <>
      <Row className="my-3">
        <Col>
          <Button>
            <a href="#feedback">
              Check Results <FaArrowDown />{' '}
            </a>
          </Button>
        </Col>
        <Col>
          <Button id="copy" onClick={copyToClip}>
            Copy To Clipboard
          </Button>
        </Col>
      </Row>

      <div id="feedback">
        {feedback.map((feedbackItem) => (
          <Card key={feedbackItem._id}>
            {scoresEntries.map(
              (result) =>
                feedbackItem.category === result[0] && (
                  <>
                    <Card.Header as="h2">
                      {result[0]} {result[1]}/5
                    </Card.Header>
                    <Card.Body>
                      <Card.Text>{feedbackItem.mainText[result[1]]}</Card.Text>
                    </Card.Body>
                  </>
                )
            )}
            {feedbackItem.commonErrors.map((commonError) =>
              errorsEntries.map(
                (error) =>
                  commonError.name === error[0] &&
                  error[1] === true && (
                    <Card.Body>
                      <Card.Text>
                        {commonError.name}: {commonError.text}
                      </Card.Text>
                    </Card.Body>
                  )
              )
            )}
          </Card>
        ))}
      </div>
    </>
  );
};

export default ReportCard;
