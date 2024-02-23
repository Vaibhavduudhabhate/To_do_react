import { createBrowserRouter } from "react-router-dom";
import Todo from "./components/Todo";
import App from "./App";
import Savetask from "./components/Savetask_left";

const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:< Todo />,
      },
      {
        path: "/",
        element:< Savetask />,
      },
  
]}]);

export default customRouter;
