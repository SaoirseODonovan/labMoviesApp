import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'
import Avatar from '@mui/material/Avatar';

export default function MovieActorCard(props){
  const actor = props.actor;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        title={
          <Typography variant="h5" component="p">
            {actor.name}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        image={
          actor.profile_path
            ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
            : img
        }
      />
      <CardContent>
      </CardContent>
      <CardActions disableSpacing>
        <Link to={`/actors/${actor.id}`}>
        </Link>
      </CardActions>
    </Card>
  );
}