import { createBrowserRouter } from "react-router-dom";
import AppWrapper from "../layout/AppWrapper";
import NotFound from "../pages/notfound/NotFound";
import Home from "../pages/home";
import DashBoardWrapper from "../layout/DashBoardWrapper";
import Courses from "../pages/dashboard/courses/Courses";
import Chat from "../pages/dashboard/chat/Chat";
import Calendar from "../pages/dashboard/calendar/Calendar";
import Favorites from "../pages/dashboard/favorites/Favorites";
import Badges from "../pages/dashboard/badges/Badges";
import Webinars from "../pages/dashboard/webinars/Webinars";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppWrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard/courses",
    element: <Courses />,
  },
  {
    path: "/dashboard/chat",
    element: <Chat />,
  },
  {
    path: "/dashboard/calendar",
    element: <Calendar />,
  },
  {
    path: "/dashboard/favorites",
    element: <Favorites />,
  },
  {
    path: "/dashboard/badges",
    element: <Badges />,
  },
  {
    path: "/dashboard/webinars",
    element: <Webinars />,
  },
]);

export default router;
