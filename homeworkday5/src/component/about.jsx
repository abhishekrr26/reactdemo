import { show } from "../../functions/changetext";
import Navbar from "./navbar";

function About() {



  return (
    <>
    <Navbar></Navbar>
<h1 id='b'> This is a about page</h1>
<button onClick={show} className="btn btn-primary my-3">Show Enthusiasm</button>
<p id="a"></p>
    </>
  )
}

export default About