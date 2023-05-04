import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { AdminPage, ClientPage } from "./auth/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ClientPage />} />
      <Route path="/admin" element={<AdminPage />} />
    </Routes>
  );
}

export default App;
