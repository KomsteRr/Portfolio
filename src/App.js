import {BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";
import Main from "./Components/Main";
import Admin from "./Components/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/admin" element={<Admin/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
