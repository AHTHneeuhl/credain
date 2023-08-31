import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <main className="w-full px-24 py-8">
      <Outlet />
    </main>
  );
};

export default Layout;
