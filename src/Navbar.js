import React from "react"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './Navbar.css';
import Home from './pages/Home.js';
import Skills from './pages/Skills.js';
import Contact from './pages/Contact.js'


export default function ButtonAppBar() {
  return (
    <React.Fragment>
      <AppBar title = '' showMenuIconButton = "false" className = "gradient">
        <Toolbar marginLeft = 'auto'>
                <Router>
                  <IconButton color = "inherit">
                    <Link to = '/' style = {{color: "white"}}>Home</Link>
                  </IconButton>
                  <IconButton color = "inherit">
                    <Link to = '/skills' style = {{color: "white"}}>Skills</Link>
                  </IconButton>
                  <IconButton color = 'inherit'>
                    <Link to = '/contact' style = {{color: "white"}}>Contact</Link>
                  </IconButton>
                  <Switch>
                    <Route path="/" component = {Home} exact/>
                    <Route path="/skills" component = {Skills} exact/>
                    <Route path="/contact" component={Contact} exact/>
                  </Switch>
                </Router>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
