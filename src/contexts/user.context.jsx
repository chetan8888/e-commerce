import { createContext, useState } from "react";

// This is the actual storage
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    // The null here is initial state value whereas the null above is the initial value of the context
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser };
    return <UserContext.Provider value = {value}>{children}</UserContext.Provider>;
}
