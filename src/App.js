import Body from "./Components/Body";
import Error from "./Components/Error";
import {RouterProvider, createBrowserRouter} from "react-router-dom";
import MYbookings from "./Components/Mybookings.js";
const approuter=createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MYbookings/>
      }
    ],
    errorElement:<Error/>
  }

])

function App() {
  return (
      <div className="w-full h-screen bg-blue-50 text-slate-900">
        <RouterProvider router={approuter}/>
      </div>
  );
}

export default App;
