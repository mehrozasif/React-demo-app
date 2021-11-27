import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
// components
import { Login } from "./components/auth/Login";
import PrivateRoute from "./middlewares/Authenticated";
import Dashboard from "./components/Dashboard";
import "./Styles/style.scss";
import { Provider } from "react-redux";
import store from "./store.js";

function App(props) {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/login" name="login" element={<Login {...props} />} />
            <Route
              path="/"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="*"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
