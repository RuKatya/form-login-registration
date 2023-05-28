import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import Login from "../View/Login/Login";
import Registration from "../View/Registration/Registration";
import MainPage from "../View/MainPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <MainPage />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "registration",
                element: <Registration />
            }
        ]
    }
]);



const RouterPage = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default RouterPage
