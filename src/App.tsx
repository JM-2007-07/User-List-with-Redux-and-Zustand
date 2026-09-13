import { createBrowserRouter, RouterProvider, useLocation } from "react-router"
import Layout from "./layout/Layout"
import { lazy, useEffect } from "react";

const Home = lazy(() => import('./pages/Home'));
const UserInfo = lazy(() => import('./pages/UserInfo'));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function LayoutWithScroll() {
  return (
    <>
      <ScrollToTop />
      <Layout />
    </>
  )
}

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LayoutWithScroll/>,
      children: [
        {
          index: true,
          element: <Home/>
        },
        {
          path: '/info/:id',
          element: <UserInfo/>
        },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App