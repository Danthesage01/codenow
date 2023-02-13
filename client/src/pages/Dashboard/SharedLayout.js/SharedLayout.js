import React from "react";
import { Outlet } from "react-router-dom";
import { BigSidebar, Navbar, SmallSidebar } from "../../../components";
import {
  MainDashboard,
  PageDashboard,
  Div,
  Section,
} from "./SharedLayoutStyle";
const SharedLayout = () => {
  return (
    <Section>
      <MainDashboard>
        <SmallSidebar />
        <BigSidebar />
        <Div>
          <Navbar />
          <PageDashboard>
            <Outlet />
          </PageDashboard>
        </Div>
      </MainDashboard>
    </Section>
  );
};

export default SharedLayout;
