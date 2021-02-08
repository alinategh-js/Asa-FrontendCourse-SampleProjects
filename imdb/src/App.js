import Movies from "./components/movies";
import "./App.css";
import Header from "./components/header";
import { Redirect, Route, Switch } from "react-router-dom";
import Users from "./components/users";
import Posts from "./components/posts";
import Admin from "./components/admin";
import Dashboard from "./components/dashboard";
import Customers from "./components/customers";
import NewUser from './components/newuser';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          {/* USERS */}
          <Route path="/users" exact component={Users} />
          <Route path='/users/new' exact component={NewUser}/>

          <Route path="/posts" component={Posts} />
          <Route path="/admin" component={Admin} />
          <Route
            path="/not-found"
            render={(props) => <Admin user="ali" {...props} />}
          />

          <Route path="/" exact component={Dashboard} />

          <Redirect from="/films" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    </>
  );
}

export default App;
