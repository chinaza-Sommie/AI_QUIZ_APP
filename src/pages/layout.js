import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className='min-h-screen bg-[#0e121a] bg-grid'>
      <Outlet />
    </div>
  );
}

export default Layout;
