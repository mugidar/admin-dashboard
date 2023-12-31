import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import "./styles/global.scss";
import Products from "./pages/products/products";
import Users from "./pages/users/Users";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import SinglePage from "./components/SinglePage/SinglePage";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import { QueryClientProvider,QueryClient, } from "@tanstack/react-query";

const queryClient = new QueryClient()


function App() {
  const Layout = () => {


    
    return (
      <>
        <Header />
        <main className="main">
          <div className="container">
            <Menu />
            <div className="main_content">
              <QueryClientProvider client={queryClient}>
                <Outlet />
              </QueryClientProvider>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/users",
          element: <Users />
        },
        {
          path: "/products",
          element: <Products />
        },
        {
          path: "/products/:id",
          element: <Product />
        },
        {
          path: "/users/:id",
          element: <User />
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
