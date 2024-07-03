import { Component } from 'react';
import {
  BrowserRouter,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <h1>Simple SPA</h1>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
          </nav>
          <main>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </main>
        </>
      </BrowserRouter>
    );
  }
}

export default App;
