import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import ReactLoading from 'react-loading';

import AppBar from "components/AppBar";

export default function Layout() {
  return (<>
    <AppBar />
    <Suspense fallback={<ReactLoading className="loading" type={'bubbles'} color={'#5822b4'} height={667} width={375} />}>
      <Outlet />
      </Suspense>
      </>
  );
};