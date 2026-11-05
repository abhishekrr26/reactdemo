import { useState } from "react"




function Child(props){


return(
    <>
      <ul>
        {props.demo.map((item)=>{return <li>{item}</li>})}
      </ul>
    </>
)

}













export default Child