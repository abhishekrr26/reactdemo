import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const name=['pizza','burger','apple'];

 function btn(pro){
  document.getElementById('a').innerHTML=`You have selected<span style='color:red'> ${pro}</span>`;
 }


  return (
    <>
    <div className='main'>


    <div className='first shadow'>
    <h2>{name[0]}</h2>
    <p>Pizza is a delicious Italian dish topped with cheese, sauce, and various toppings.
</p>
<button className='btn btn-info' onClick={()=>btn(name[0])}> Click</button>
    </div>

    <div className='first shadow'>
    <h2>{name[1]}</h2>
    <p> A burger is a tasty sandwich made with a patty, vegetables, and sauces between two buns.
</p>
 <button className='btn btn-info' onClick={()=>btn(name[1])}> Click</button>
    </div>


<div className='first shadow'>
    <h2>{name[2]}</h2>
    <p> An apple is a sweet and crunchy fruit that is rich in fiber and vitamins.
</p>
  <button onClick={()=>btn(name[2])} className='btn btn-info'> Click</button>
    </div>
    </div>
<div className='a'>
  <p id='a'>Select a food that you love!".</p>
</div>











    </>
  )
}

export default App
