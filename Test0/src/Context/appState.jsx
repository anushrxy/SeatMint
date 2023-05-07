import React, { useState } from "react";
import AppContext from "./appContext";

const AppState = (props) => {
    const[connected, setConnected] = useState(false);
    const[userAddress, setUserAddress] = useState("");

    return (
        <AppContext.Provider value={{
            connected, setConnected, 
            userAddress, setUserAddress
            }}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;