import { useState } from 'react'
import './App.css'
import Child from './child';


function App() {

const [demo, setTasks] = useState([]);

function data(e){
  e.preventDefault();

  if(document.getElementById('data').value.trim()==''){
    return;
  }
   setTasks([...demo,document.getElementById('data').value])
  }
  if(demo==''){
    const a=<p>Add a task to get started!”.</p>
  }
  return (
    <>
    <form onSubmit={data}>
      <input id='data' placeholder='Enter the task'></input>
<br>
</br>
    <button type='submit'>Submit</button>
    </form>
   {demo.length === 0 && <p>Add a task to get started!</p>}
<Child demo={demo} ></Child>

    </>
  )
}

export default App
