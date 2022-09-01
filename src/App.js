// import logo from './logo.svg';
import "./App.css";
import Navbar from "./Navbar";
import "./Navbar.css";
import Home from "./Home";
import About from "./About";
import News from "./News";
import Contact from "./Contact";
import Login from "./Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="news" element={<News />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
