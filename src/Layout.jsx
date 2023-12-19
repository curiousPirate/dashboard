import { Outlet } from "react-router-dom";
import { Suspense } from "react";


export default function Layout() {
  return (
    <>
      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
}
