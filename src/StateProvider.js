import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(); 
/* 
    Preparing data layer, creating something called context,
    which is where everything actully lives
*/

export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value = {useReducer(reducer, initialState)}>
        {children}    
    </StateContext.Provider>
)
/* 
    StateProvider = Data Layer
    Children = App in index.js
    Allows us to set up the data layer
*/
export const useStateValue = () => useContext(StateContext);

/* 
    pull info from data layer
*/