import './App.css';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Review from "./pages/Review";
function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path='/main' element={<Main />}>
          </Route> 
          <Route path="/main/review" element={<Review />} /> 

          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
