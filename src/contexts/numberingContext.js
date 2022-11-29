import React, { useState } from "react";

export const NumberingContext = React.createContext(null);

const NumberingContextProvider = (props) => {
  const [page, setPage] = useState( [] );

  return (
    <NumberingContextProvider
    value={{
        page,
        setPage
    }}
    >
        {props.children}
    </NumberingContextProvider>
  );
};
 export default NumberingContextProvider;