import { Outlet } from "react-router";

const LayoutContainerForm = () => {
  return (
    <div className="w-96 mx-auto mt-10">
      <h1>Layout</h1>
      <Outlet />
    </div>
  );
};

export default LayoutContainerForm;
