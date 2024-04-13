import React,{useContext} from "react";
import { UserContext } from "./ComponentA.jsx";
function ComponentD(){

    const user = useContext(UserContext);

    return(
        <div className="p-1 m-1 border-2 border-rose-500">
            <h1 className="text-amber-500">ComponentD</h1>
            <h2 className="text-amber-500">{`Bye ${user}`}</h2>
        </div>
    );
}
export default ComponentD