import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

import { Provider as StudentsProvider } from "./context/StudentsContext";
import HomePage from "./pages/HomePage";

import StudentListPage from "./pages/StudentListPage";
import StudentRegisterPage from "./pages/StudentRegisterPage";

const MainRouter = () => {
  return (
    <Router>
      <Switch>
        <StudentsProvider>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/list" component={StudentListPage}></Route>
          <Route path="/list/:type" component={StudentListPage}></Route>
          <Route exact path="/register" component={StudentRegisterPage}></Route>
          <Route path="/edit/:id" component={StudentRegisterPage}></Route>
        </StudentsProvider>
      </Switch>
    </Router>
  );
};

export default MainRouter;
