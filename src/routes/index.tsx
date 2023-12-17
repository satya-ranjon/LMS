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
    path: "dashboard",
    element: <DashBoardWrapper />,
    errorElement: <NotFound />,
    children: [
      {
        path: "courses",
        element: <Courses />,
      },
      {
        path: "chat",
        element: <Chat />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "favorites",
        element: <Favorites />,
      },
      {
        path: "badges",
        element: <Badges />,
      },
      {
        path: "webinars",
        element: <Webinars />,
      },
    ],
  },
]);

export default router;
