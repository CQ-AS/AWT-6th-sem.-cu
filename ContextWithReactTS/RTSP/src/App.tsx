// import { createContext, useState } from "react";
import { Login } from "./component/login";
import { Greet } from "./component/Greet";
import  UserContextProvider  from "./component/Context/UserContext";
// Context type
// type UserContextType = {
//   user: string;
//   setUser: React.Dispatch<React.SetStateAction<string>>;
// };

// Create Context
// export const UserContext = createContext<UserContextType>({
//   user: "",
//   setUser: () => {},
// });

export default function App() {
  // const [user, setUser] = useState<string>("Guest");

  return (
  //  <UserContext.Provider value={{user,setUser}}>
    <UserContextProvider>
    <Login />
    <Greet />
    </UserContextProvider>
  //  </UserContext.Provider>
   
  );
}




