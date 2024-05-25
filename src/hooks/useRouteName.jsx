import { useSelector } from "react-redux";
import _ from "lodash";

import * as adminRoutes from "../routes/adminRoutes";

export const useRouteName = () => {
  const strapiSidebar = useSelector(store => store.strapi.sidebar);
  let routesObj = adminRoutes.dashboardRoutes;
  if (!location.pathname.includes("/admin")) {
    routesObj = userRoutes.dashboardRoutes;
  }
  let routes = [];
  let name = "";

  routesObj.forEach((route) => {
    const attributes = _.find(strapiSidebar, ({attributes}) => attributes.title==route.name);
    route.header = attributes ? attributes.attributes.header : route.header;
    routes.push(route);
    if (route.subMenu) {
      route.subMenu.forEach((subRoute) => {
        if (subRoute.subheader) {
          const subAttributes = _.find(strapiSidebar, ({attributes}) => attributes.title==subRoute.name);
          subRoute.header = (attributes ? attributes.attributes.name : route.name)+" - "+(subAttributes ? subAttributes.attributes.header : subRoute.subheader);
        } else {
          subRoute.header = attributes ? attributes.attributes.name : subRoute.name;
        }
      })
      routes = routes.concat(route.subMenu);
    }
  });
  
  routes.forEach((route) => {
    if (window.location.href.indexOf(route.layout + route.path) !== -1) {
      name = route.header
    }
  });
  return name;
};