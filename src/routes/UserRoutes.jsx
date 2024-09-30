import Login from "../features/user/components/Login";
import Register from "../features/user/components/Register";

export const userRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];
