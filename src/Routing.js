import { createBrowserRouter } from "react-router-dom";
import Todo from "./components/Todo";
import App from "./App";


const customRouter = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element:< Todo />,
      },
]
}
]);

export default customRouter;
