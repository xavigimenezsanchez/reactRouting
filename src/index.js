import React from "react";
import ReactDOM from "react-dom";
import Alert from "react-bootstrap/Alert";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

//https://reacttraining.com/react-router/web/guides/quick-start
import "./styles.css";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>Home</h1>;
}
function About() {
  return <h1>About</h1>;
}
function Users() {
  return <h1>Users</h1>;
}
function Topics() {
  let match = useRouteMatch();
  console.log("patata");
  return (
    <div>
      <h1>Topics</h1>
      <ButtonToolbar>
        <Button variant="outline-success">
          <Link to={`${match.url}/components`}>Components</Link>
        </Button>
        <Button variant="outline-success">
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </Button>
      </ButtonToolbar>
      <Switch>
        <Route path={`${match.url}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <Alert variant="success">
            <p>Please select a topic.</p>
          </Alert>
        </Route>
      </Switch>
    </div>
  );
}
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topid ID: {topicId}</h3>;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
