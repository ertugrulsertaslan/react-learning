import React,{useState, createContext} from 'react';
import ComponentB from './ComponentB.jsx';


export const UserContext = createContext();

function ComponentA(){
    
    const [user, setUser] = useState("✋");

    return(
        <div className="p-1 border border-2 border-zinc-950">
            <h1>ComponentA</h1>
            <h2>{`Hello ${user}`}</h2>
            <UserContext.Provider value={user}>
                <ComponentB user = {user} />
            </UserContext.Provider>
        </div>
    );
}
export default ComponentA