import React, { useState } from "react";

export const MovieActorContext = React.createContext(null);

const MovieActorContextProvider = (props) => {
  const [favourites, setFavourites] = useState( [] ) 


 return (
    <MovieActorContext.Provider
      value={{
        favourites
      }}
    >
      {props.children}
    </MovieActorContext.Provider>
  );
};

export default MovieActorContextProvider;