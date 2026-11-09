import {createBrowserRouter} from "react-router-dom";
import App from './App';
import Contact from './component/contact';
import About from './component/about';

const router =createBrowserRouter([
    { path:'',element:<App></App>},
    {path:'about',element:<About></About>},
    {path:'contact',element:<Contact></Contact>}
])


export default router;