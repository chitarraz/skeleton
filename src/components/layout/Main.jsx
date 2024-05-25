// main layout
import React from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
// @mui/material components
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import { snackbarTime } from "../../config/variables";
import * as allAdminRoutes from "../../routes/adminRoutes";
// css
import Header from "./Header";
import Sidebar from "./Sidebar";
import styles from "../../assets/css/layout/main.module.scss";
import Home from "../Home/Home";

export default function Main() {
  const contentRef = React.useRef(null);
  const isLoading = useSelector(store => store.general.isLoading);
  const error = useSelector(store => store.general.error);
  const success = useSelector(store => store.general.success);

  let subRoutes = [];
  let mainRoutes = allAdminRoutes.dashboardRoutes;
  const routesObj = allAdminRoutes;
  Object.keys(routesObj).forEach((key) => {
    if (key !== "dashboardRoutes") {
      if (key.includes("SubRoutes")) {
        mainRoutes=[...routesObj[key], ...mainRoutes];
      } else {
        subRoutes=[...subRoutes, ...routesObj[key]];
      }
    }
  })
  
  const RoutesRoutes = (
    <Routes>
      {subRoutes.map((prop, key) => {
        if (prop.layout === location.pathname.includes("/admin") ? "/admin" : "/user") {
          return (
            <Route
              path={prop.layout + prop.path}
              element={<prop.component />}
              // component={prop.component && (prop.permissionName ? (checkPermission(prop.permissionName,"readEdit") || (checkPermission(prop.permissionName,"read") && prop.readOnly)) : true) ? prop.component : Error}
              key={key}
            />
          );
        }
      })}
      {mainRoutes.map((prop, key) => {
        if (prop.layout === location.pathname.includes("/admin") ? "/admin" : "/user") {
          return (
            <Route
              path={prop.layout + prop.path}
              element={<prop.component />}
              // component={prop.component && (prop.permissionName ? !checkPermission(prop.permissionName, "none") : true) ? prop.component : Error}
              key={key}
            />
          );
        }
      })}
    </Routes>
  );

  const content = () => {
    if (error === 401) { // Unauthorised
      return <Error />;
    } else {
      return ( 
        <div className={isLoading ? "hidden" : styles.content}>
          <div className={styles.container}>
            {RoutesRoutes}
          </div>
          <Snackbar 
            open={error != false && !isNoSnackbar} 
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={snackbarTime} 
            onClose={()=>dispatch(setError(false))}
          >
            <Alert severity="error" elevation={6} variant="filled">
              {error}
            </Alert>
          </Snackbar>
          <Snackbar 
            open={success != false} 
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            autoHideDuration={snackbarTime} 
            onClose={()=>dispatch(setSuccess(false))}
          >
            <Alert severity="success" elevation={6} variant="filled">
              {success}
            </Alert>
          </Snackbar>
        </div>
      )
    }
  }

  React.useEffect(() => {
    contentRef.current.scrollTo(0, 0);
  },[location.pathname])

  return (
    <React.Fragment>
      <div className={styles.mainPanel} ref={contentRef}>
        <Header
          // routes={adminRoutes}
          // handleDrawerToggle={handleDrawerToggle}
          // {...rest}
        />
        <Sidebar
          routes={allAdminRoutes.dashboardRoutes}
          // handleDrawerToggle={handleDrawerToggle}
          // open={mobileOpen}
          // {...rest}
        />
        {content()}
      </div>
    </React.Fragment>
  );
}
