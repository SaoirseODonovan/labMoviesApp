import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import img from '../../images/film-poster-placeholder.png';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { MovieActorContext } from "../../contexts/movieActorContext";
import Avatar from '@mui/material/Avatar';
import IconButton from "@mui/material/IconButton";

export default function MovieActorCard({actors,action}){
const {favourites,addToFavourites} = useContext(MovieActorContext);

if (favourites.find((id) => id === actors.id)) {
  actors.favourite = true;
} else {
  actors.favourite = false;
}

    return (
        <Card sx={{ maxWidth: 345 }}>
             <CardHeader
             avatar={
              actors.favourite ? (
                <Avatar sx={{ backgroundColor: 'red' }}>
                  <FavoriteIcon />
                </Avatar>
              ) : null
            }
           title={
            <Typography variant="h5" component="p">
              {actors.name}{" "}
            </Typography>
          }
          />
          <CardMedia
            sx={{ height: 500 }}
            image={
                actors.profile_path
                ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}` 
                : img
            }
          />
          <CardContent>
          </CardContent>
          <CardActions disableSpacing>
            {action(actors)}
          <Link to={`/actors/${actors.id}`}>
          <Button variant="outlined" size="medium" color="primary">
            More Info ...
          </Button>
        </Link>
        </CardActions>
        </Card>
      );
}



// import React from "react";
// import { Link } from "react-router-dom";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import CardHeader from "@mui/material/CardHeader";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// // import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
// // import StarRateIcon from "@mui/icons-material/StarRate";
// import IconButton from "@mui/material/IconButton";
// // import Grid from "@mui/material/Grid";
// import img from '../../images/film-poster-placeholder.png'//
// import Avatar from '@mui/material/Avatar';
// import { useContext } from "react";
// import { MovieActorContext } from "../../contexts/movieActorContext";

// export default function MovieActorCard({ actors, action }){
//   const { favourites, addToFavourites } = useContext(MovieActorContext);

//   if (favourites.find((id) => id === actors.id)) {
//     actors.favourite = true;
//   } else {
//     actors.favourite = false
//   }

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//       avatar={
//         actors.favourite ? (
//           <Avatar sx={{ backgroundColor: 'red' }}>
//             <FavoriteIcon />
//           </Avatar>
//         ) : null
//       }
//         title={
//           <Typography variant="h5" component="p">
//             {actors.name}{" "}
//           </Typography>
//         }
//       />
//       <CardMedia
//         sx={{ height: 500 }}
//         image={
//           actors.profile_path
//             ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
//             : img
//         }
//       />
//       <CardContent>
     
//       <CardActions disableSpacing>
//       {action(actors)}
//         <Link to={`/actors/${actors.id}`}>
//           <Button variant="outlined" size="medium" color="primary">
//             More Info ...
//           </Button>
//         </Link>
//       </CardActions>

//       {/* {"Actor popularity rating: "} {actors.popularity}{" "} */}
//       </CardContent>
//     </Card>
//   );
// }

// //Continue working on this 
// // import React, { useContext } from "react";
// // import { Link } from "react-router-dom";
// // import Card from "@mui/material/Card";
// // import CardActions from "@mui/material/CardActions";
// // import CardContent from "@mui/material/CardContent";
// // import CardMedia from "@mui/material/CardMedia";
// // import CardHeader from "@mui/material/CardHeader";
// // import Button from "@mui/material/Button";
// // import Typography from "@mui/material/Typography";
// // import FavoriteIcon from "@mui/icons-material/Favorite";
// // // import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
// // // import StarRateIcon from "@mui/icons-material/StarRate";
// // import IconButton from "@mui/material/IconButton";
// // // import Grid from "@mui/material/Grid";
// // import img from '../../images/film-poster-placeholder.png'//
// // import Avatar from '@mui/material/Avatar';
// // import { MovieActorContext } from "../../contexts/movieActorContext"

// // export default function MovieActorCard({ actors, action }){
// //   const { favourites, addToFavourites } = useContext(MovieActorContext);

// //   if (favourites.find((id) => id === actors.id)) {
// //     actors.favourite = true;
// //   } else {
// //     actors.favourite = false
// //   }

// //   const handleAddToFavourite = (e) => {
// //     e.preventDefault();
// //     addToFavourites(actors);
// //   };


// //   return (
// //     <Card sx={{ maxWidth: 345 }}>
// //       <CardHeader
// //       avatar={
// //         actors.favourite ? (
// //           <Avatar sx={{ backgroundColor: 'red' }}>
// //             <FavoriteIcon />
// //           </Avatar>
// //         ) : null
// //       }
// //         title={
// //           <Typography variant="h5" component="p">
// //             {actors.name}{" "}
// //           </Typography>
// //         }
// //       />
// //       <CardMedia
// //         sx={{ height: 500 }}
// //         image={
// //           actors.profile_path
// //             ? `https://image.tmdb.org/t/p/w500/${actors.profile_path}`
// //             : img
// //         }
// //       />
// //       <CardContent>
// //       <CardActions disableSpacing>
// //         {action(actors)}
// //       <IconButton aria-label="add to favourites" onClick={handleAddToFavourite}>
// //         <FavoriteIcon color="primary" fontSize="large" />
// //     </IconButton>

// //         <Link to={`/actors/${actors.id}`}>
// //         <Button variant="outlined" size="medium" color="primary">
// //             More Info ...
// //           </Button>
// //         </Link>
// //       </CardActions>
// //       {/* {"Actor popularity rating: "} {actors.popularity}{" "} */}
// //       </CardContent>
// //     </Card>
// //   );
// // }