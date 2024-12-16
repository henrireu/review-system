import { useState } from "react";

import Services from "./pages/Services"

const App = () => {
  // eslint-disable-next-line no-unused-vars
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <div className="px-10">
      <h1 className="text-5xl text-center">Review System</h1>
      <Services />
    </div>
  )
}

export default App
