import { useState, createContext } from "react";

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [sideWidth, setSideWidth] = useState(false);
    const [user, setUser] = useState(false);

    return (
        <AppContext.Provider value={{ sideWidth, setSideWidth, user, setUser }}>
            {props.children}
        </AppContext.Provider>
    );
};
