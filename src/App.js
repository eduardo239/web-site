import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";


const App = () => {
  return (
    <Box>
      <Card sx={{ maxWidth: 500, padding: 5, margin: 2 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://www.lambdatest.com/blog/wp-content/uploads/2020/08/LambdaTest-320-180.png"
          alt="LambdaTest"
          sx={{
            "@media screen and (max-width: 600px)": {
              height: "150px",
            },
          }}
        />
        <CardContent
          sx={{
            "@media screen and (max-width: 600px)": {
              paddingBottom: "20px",
            },
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            LambdaTest{" "}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lambdatest is a cloud-based testing platform that allows developers
            and testers to perform cross-browser testing of web applications. It
            provides a virtual environment to test applications on a range of
            browsers, operating systems, and devices.
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};


export default App;