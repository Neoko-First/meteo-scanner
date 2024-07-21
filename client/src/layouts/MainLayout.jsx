import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import Header from "../components/Header";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <div className="h-full w-full flex flex-col p-[20px] gap-3">
      <Header />
      <Navbar />
      <Suspense
        fallback={
          <div className="flex-1 h-full w-full flex justify-center items-center">
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
}
