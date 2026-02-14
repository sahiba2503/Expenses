// import ExpenseTracker from "./ExpenseTracker";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";

function App(){
  return (
    <BrowserRouter>
    <h1>React Router Example</h1>
    <nav>
    <Link to="/">Home</Link>|
    <Link to="/about">about</Link>|
    <Link to="/contact">contact</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
    </Routes>
    </BrowserRouter>
  )
}
export default App;
