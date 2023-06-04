import { Button, Jumbotron } from "react-bootstrap";
import React from "react";

const JumbotronComponent = (props) => {
  const redirectToLinkedin = () => {
    window.location.assign("linkedin.com/");
  };

  return (
    <div>
      <Jumbotron>
        <h1>Welcome to Joule Cooperation</h1>
        <p>Made by</p>
        <p>
          <Button variant="info" onClick={redirectToLinkedin}>
            Juole hiring
          </Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default JumbotronComponent;
