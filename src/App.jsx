import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/app-layouts';
import LandingPage from './pages/landing';
import DashboardPage from './pages/dashboard';
import AuthPage from './pages/auth';
import LinkPage from './pages/link';
import RedirectLinkPage from './pages/redirect-link';

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/dashboard',
        element: <DashboardPage />
      },
      {
        path: '/auth',
        element: <AuthPage />
      },
      {
        path: '/link/:id',
        element: <LinkPage />
      },
      {
        path: '/:id',
        element: <RedirectLinkPage />
      },
    ]
  }
])


function App() {
  return <RouterProvider router = {router}/>
}

export default App
