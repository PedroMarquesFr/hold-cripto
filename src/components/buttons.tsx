import React from "react";
import { Button } from "react-bootstrap";

// import { Container } from './styles';

const Buttons: React.FC = () => {
  return (
    <div>
      {" "}
      <Button variant="primary" className="mr-1">
        Primary
      </Button>
      <Button variant="secondary" className="mr-1">
        Secondary
      </Button>
      <Button variant="success" className="mr-1">
        Success
      </Button>
      <Button variant="warning" className="mr-1">
        Warning
      </Button>
      <Button variant="danger" className="mr-1">
        Danger
      </Button>
      <Button variant="info" className="mr-1">
        Info
      </Button>
      <Button variant="light" className="mr-1">
        Light
      </Button>
      <Button variant="dark" className="mr-1">
        Dark
      </Button>
      <Button variant="link" className="mr-1">
        Link
      </Button>
    </div>
  );
};

export default Buttons;
