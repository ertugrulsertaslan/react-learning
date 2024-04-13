import React,{useContext} from "react";
import { UserContext } from "./ComponentA.jsx";
import ComponentD from './ComponentD.jsx';

function ComponentC(){
    const user = useContext(UserContext);

    return(
        <div className="p-1 m-1 border-2 border-purple-500">
            <h1 className="text-blue-500">ComponentC</h1>
            <h2 className="text-blue-500">{`Hello again ${user}`}</h2>
            <ComponentD />
        </div>
    );
}
export default ComponentC