import React from "react";
import Grid from "@mui/joy/Grid";
import HeaderBanner from "./components/HeaderBanner";
import SearchBar from "./components/SearchBar";

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
        <SearchBar />
      </Grid>
    </>
  );
};

export default App;
