import React, { createContext } from "react";
import Component2 from "./Component2";
const FirstName = createContext();
const LastName = createContext();
export default function Component1() {
  return (
    <div>
      <FirstName.Provider value="Adfar">
        <LastName.Provider value="Rashid">
          <Component2 />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}
export { FirstName, LastName };
