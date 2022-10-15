import Categories from "../../components/categories/categories.component";
import React from "react";
import { Outlet } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <Categories />;
      <Outlet />
    </div>
  );
};

export default Home;
