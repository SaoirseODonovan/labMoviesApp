import React from "react";
import Actor from "../movieActorCard";
import Grid from "@mui/material/Grid";

const MovieActorList = ( {movies, action }) => {
  let movieActorCards = movies.map((m) => (
    <Grid key={m.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
      <Actor key={m.id} movie={m} action={action} />
    </Grid>
  ));
  return movieActorCards;
};

export default MovieActorList;