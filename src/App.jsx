import {Routes, Route, Navigate} from "react-router-dom";

import Login from "./pages/Login";
import Upload from "./pages/Upload";
import Result from "./pages/Result";

function App(){

  return(
    // <h1>Resume Filtration System</h1>
    <Routes>

      <Route path="/" element={<Navigate to="/login"/>} />

      <Route path="/login" element={<Login />}  />

      <Route path="/upload" element={<Upload />} />

      <Route path="/result" element={<Result />} />

    </Routes>
  );
}

export default App;