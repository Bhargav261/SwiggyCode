import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About.js';
import ContactUs from './pages/Contactus';
import Navigation from './pages/Navigation';
import Category from './pages/Category';
import NotFound from './pages/NotFound';
import Details from './pages/Details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navigation /> */}
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/category">
            <Route path=":id" element={<Details />} />
            <Route index element={<Category />} />
          </Route>
          <Route path="/about" element={<Navigate replace={true} to="/contact" />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
          <Route path="*" element={<NotFound />} />

          {/* <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="teams" element={<Teams />}>
              <Route path=":teamId" element={<Team />} />
              <Route path="new" element={<NewTeamForm />} />
              <Route index element={<LeagueStandings />} />
            </Route>
          </Route> */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
