import React from "react";
import Grid from "@mui/joy/Grid";
import HeaderBanner from "./components/HeaderBanner";

const App = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
      >
        <HeaderBanner />
      </Grid>
    </>
  );
};

export default App;
