type TProps = {
  children?: React.ReactNode;
};

const Layout: React.FC<TProps> = ({ children }) => {
  return <main className="w-full mx-24">{children}</main>;
};

export default Layout;
