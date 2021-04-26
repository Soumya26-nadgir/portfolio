import React, {useContext, useReducer} from 'react';
import{UserContext} from "../context/UserContext";
import userreducer from "../context/reducer";
import Contact from './Contact';


const Details = () => {
   
    const [users, dispatch]= useReducer(userreducer, [])
    return(
        <UserContext.Provider value={{users, dispatch}}>
            <div className="container-fluid">
                <h1>Costumer Details</h1>
                <Contact/>
            </div>
        </UserContext.Provider>
    );
}

export default Details
