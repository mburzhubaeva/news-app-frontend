import React, {Fragment} from 'react';
import {Container, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {NavLink as RouterNavLink, Route, Switch} from 'react-router-dom';
import Posts from "./containers/Posts/Posts";

function App() {
  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand tag={RouterNavLink} to="/">News</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={RouterNavLink} to="/posts/new">New Post</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
      <Container style={{marginTop: '10px'}}>
      <Switch>
        <Route path="/" exact component={Posts} />
        <Route path="/posts/:id" exact component={Post} />
      </Switch>
      </Container>
    </Fragment>
  );
}

export default App;
