import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const name = 'Alex';
  const age =20;
  const hobbies=['reading','hiking','coding'];
  const isstud=true;
  let a;
let list=[];
    for (let i = 0; i < hobbies.length; i++) {
    list.push(<li>{hobbies[i]}</li>);
  }
function demo(){
document.getElementById('a').innerHTML='Hello from React! I love my hobbies!';
}
  return (
    <>
<div className='di pl-5 shadow'>
    <h3>Name:{name}</h3>
    <h4>Age:{age}</h4>
    <p>Is the user student - {isstud.toString()}</p>
    <h5>Hobbies</h5>
   <ul>
  {hobbies.map((item)=>{return <li>{item}</li>})}
   </ul>
<ul>
  {list}
      </ul>
<button onClick={demo} className='btn btn-primary mb-3'>
  Click Here
</button>
<p id='a'></p>
</div>
    </>
  )
}

export default App
