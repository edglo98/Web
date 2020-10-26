import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import WorkPage from './pages/WorkPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header/>
          <Switch>
            <Route path="/about">
              <AboutPage/>
            </Route>
            <Route path="/work">
              <WorkPage/>
            </Route>
            <Route path="/projects">
              <ProjectsPage/>
            </Route>
            <Route path="/contact">
              <ContactPage/>
            </Route>
            <Route path="/">
              <MainPage/>
            </Route>
          </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
