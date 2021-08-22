import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TasksProvider } from "./hooks/context/tasksContext";

import Navbar from "./components/Navbar";
import TaskList from "./pages/TaskList";
import TaskForm from "./pages/TaskForm";
import './App.css'

function App() {
  return (
    <div className="App">
      <TasksProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route component={TaskList} path="/" exact />
            <Route component={TaskForm} path="/new" />
          </Switch>
        </Router>
      </TasksProvider>
    </div>
  );
}

export default App;
