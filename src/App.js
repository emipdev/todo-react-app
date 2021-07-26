import Nav from './components/Nav';
import ToDos from './components/ToDos';
import AddTodo from './components/AddTodo';
import TodoDetail from './components/TodoDetail';
import {Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Nav />
      <Route exact path='/'>
        <div className="container">
          <ToDos key="todo" status="Todo"/>
          <ToDos key="inProgress" status="InProgress"/>
          <ToDos key="done" status="Done"/>
        </div>
      </Route>
      <Route path='/add'>
        <AddTodo />
      </Route>
      <Route path='/edit/:id'>
        <TodoDetail/>
      </Route>
    </div>
  );
}



export default App;