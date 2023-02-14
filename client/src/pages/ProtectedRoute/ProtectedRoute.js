import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthGlobalContext } from "../../context/authContext/authContext";
import Loading from "../../components/Loading/Loading";
import { Info, Section, Div } from "./ProtectedRouteStyle";

const ProtectedRoute = ({ children }) => {
  const { user, userLoading } = useAuthGlobalContext();
  if (userLoading) {
    return (
      <Div>
        <Section>
          <Info>
            <Loading center={true} />;
          </Info>
        </Section>
      </Div>
    );
  }
  if (!user) {
    return <Navigate to="/welcome" />;
  }

  return children;
};

export default ProtectedRoute;
