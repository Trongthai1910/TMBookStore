import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import ProductList from "./pages/ProductList";
export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: "/",
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      ),
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return routeElements;
}
