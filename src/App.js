import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { Button , ButtonGroup } from 'react-bootstrap';
import { toggleFilter } from './redux/actions';

function App() {
  const todos= useSelector(state => state.todos)
  const filter= useSelector(state => state.filter)
  const dispatch = useDispatch()
  return (
    <div className="App m-5">
      <h1>ToDo App</h1>
      <AddTask/>
      <ButtonGroup aria-label="Basic example">
  <Button onClick={()=>dispatch(toggleFilter(null))} variant="secondary">All</Button>
  <Button onClick={()=>dispatch(toggleFilter(true))} variant="secondary">Done</Button>
  <Button onClick={()=>dispatch(toggleFilter(false))} variant="secondary">Undone</Button>
</ButtonGroup>
      <ListTask todos={filter===null? todos:todos.filter(el=>el.isDone===filter)}/>
    </div>
  );
}

export default App;
