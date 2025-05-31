import React from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const App = () => {
  return (
    <>
     <Stack direction="horizontal" gap={2}>
  <Button as="a" variant="primary">
    Access
  </Button>
  <Button as="a" variant="success">
    Generate
  </Button>
</Stack>;
    </>
  );
};


export default App;