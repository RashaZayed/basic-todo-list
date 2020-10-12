import React,{useState} from 'react';
import Input from './Components/input'
import Task from './Components/Task'
import './App.css';

function App() {
  const [list , setList] = useState([]);
  return (
    <div className="App">

     { list.map( (task,i) => (<Task  task={task}  list={list} setList={setList} index={i} />))}
      <Input list={list} setList={setList} />
      
    </div>
  );
}

export default App;
