import React, { useContext } from "react";

import { AuthContext } from "../context/auth";

import AuthRoutes from "../routes/auth.routes";
import AppRoutes from "./app.routes";

function Routes() {
  const { signed } = useContext(AuthContext);

  return signed ? <AppRoutes /> : <AuthRoutes />;
}

export default Routes;
