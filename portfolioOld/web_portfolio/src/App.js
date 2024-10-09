import { BrowserRouter, Routes, Route } from "react-router-dom";
import varibles from "./varibles.css";
import HomePage from "./pages/home/home.js";
import Fabled from "./pages/projects/fabled/fabled.js";

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fabled" element={<Fabled />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
