import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { AdminPage, ClientPage } from "./auth/";
import { User, Profile } from "./layout/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientPage />} />
      <Route path="/admin/" element={<AdminPage />}>
        <Route path="" element={<User />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;
