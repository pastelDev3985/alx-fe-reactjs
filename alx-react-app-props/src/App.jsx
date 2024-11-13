import ProfilePage from "./components/ProfilePage";
import Context from "./components/UserContext";
import React from "react";

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return;
  <Context.Provider value={userData}>
    <ProfilePage />
  </Context.Provider>;
}

export default App;
