import React,{useContext} from "react";
import { UserContext } from "./ComponentA.jsx";
function ComponentD(){

    const user = useContext(UserContext);

    return(
        <div className="p-1 m-1 border border-2 border-zinc-950">
            <h1>ComponentD</h1>
            <h2>{`Bye ${user}`}</h2>
        </div>
    );
}
export default ComponentD