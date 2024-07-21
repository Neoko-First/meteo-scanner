import { lazy } from "react";

const MainLayout = lazy(() => import("../layouts/MainLayout"));

const TodayBoard = lazy(() => import("../views/TodayBoard"));
const TomorrowBoard = lazy(() => import("../views/TomorrowBoard"));
const NextDaysBoard = lazy(() => import("../views/NextDaysBoard"));

const MembersRoutes = {
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <TodayBoard />,
    },
    {
      path: "/today",
      element: <TodayBoard />,
    },
    {
      path: "/tomorrow",
      element: <TomorrowBoard />,
    },
    {
      path: "/next-days",
      element: <NextDaysBoard />,
    },
  ],
};

export default MembersRoutes;
