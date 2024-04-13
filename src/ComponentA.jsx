import React, { useState, createContext } from "react";
import ComponentB from "./ComponentB.jsx";

export const UserContext = createContext();

function ComponentA() {
  const [user, setUser] = useState("✋");

  return (
    <div className="p-1 border-2 border-blue-500">
      <h1 className="text-purple-500">ComponentA</h1>
      <h2 className="text-purple-500">{`Hello ${user}`}</h2>
      <UserContext.Provider value={user}>
        <ComponentB user={user} />
      </UserContext.Provider>
    </div>
  );
}
export default ComponentA;
