import { useState } from "react";

import Services from "./pages/Services"

const App = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="px-10">
      <div className="flex w-full justify-center">
        <h1 className="text-5xl text-center">Review System</h1>
        {loggedIn === true ? (
          <button 
            className="ml-auto bg-blue-200 p-3 mt-2 "
            onClick={() => setLoggedIn(false)}
          >Log out</button>
        ) : (
          <button 
            className="ml-auto bg-blue-200 p-3 mt-2 "
            onClick={() => setLoggedIn(true)}
          >Log in</button>
        )}
      </div>
      <Services loggedIn={loggedIn}/>
    </div>
  )
}

export default App
