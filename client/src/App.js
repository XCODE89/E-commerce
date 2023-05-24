import { Route, Routes, useLocation } from "react-router-dom";
import Courses from "./components/courses/Courses";
import NavBar from "./components/navBar/NavBar";
import Landing from "./components/landing/Landing";
import Home from "./components/home/Home";

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname==="/"?<Landing/>:<NavBar/>}
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
      </Routes>
    </div>
  );
}

export default App;
